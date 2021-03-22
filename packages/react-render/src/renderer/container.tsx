import { getCurrentInstance } from '../instance'
import { nextTickScheduler, traverse } from '../helpers'
import { useMounted, useUnMount } from '../hooks'
import { effect, reactive, toRaw } from '@vue/reactivity'
import React, { useRef, useState } from 'react'
import { Config } from '../types'

function initState(state: any, stateChangeCb: (state: any) => void) {
  const ctx = getCurrentInstance()
  const inited = useRef(false)
  const reactiveStore = reactive(state)

  if (inited.current) return

  Object.keys(state).forEach((stateKey: string) => {
    if (!ctx[stateKey]) {
      Object.defineProperty(ctx, stateKey, {
        get() {
          return reactiveStore[stateKey]
        },
        set(newValue) {
          reactiveStore[stateKey] = newValue
        }
      })
    }
  })

  effect(
    () => {
      const store = Object.keys(state).reduce((obj, key) => {
        obj[key] = toRaw(traverse(reactiveStore[key]))
        return obj
      }, {} as any)

      if (inited.current) stateChangeCb(store)
    },
    {
      scheduler: nextTickScheduler
    }
  )
  inited.current = true
}

function initMethods(methods: any) {
  const ctx = getCurrentInstance()
  const inited = useRef(false)

  if (inited.current) return

  Object.keys(methods).forEach(key => {
    if (ctx[key]) {
      console.error(`[Lefe] 上下文中已经存在相同的${key}`)
    }

    ctx[key] = (...args: any[]) => {
      methods[key].apply(ctx, args)
    }
  })
  inited.current = true
}

function initLifeCycles(lifeCycles: any) {
  const ctx = getCurrentInstance()

  useMounted(lifeCycles.mounted ? lifeCycles.mounted.bind(ctx) : () => {})
  useUnMount(
    lifeCycles.beforeDestory ? lifeCycles.beforeDestory.bind(ctx) : () => {}
  )
}

export const provideContext = React.createContext<Config>({
  state: {},
  methods: {},
  lifeCycles: {},
  children: []
})

export function WithContainer(config: Config) {
  const { state, methods, lifeCycles } = config
  const [store, setStore] = useState(state)

  initState(state, newState => {
    setStore(newState)
  })
  initMethods(methods)
  initLifeCycles(lifeCycles)

  return ({ children }: any) => {
    return (
      <provideContext.Provider value={{ state: store, methods }}>
        {children}
      </provideContext.Provider>
    )
  }
}
