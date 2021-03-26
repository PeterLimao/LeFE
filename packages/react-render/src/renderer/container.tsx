import { getCurrentInstance } from '../instance'
import { nextTickScheduler, traverse } from '../helpers'
import { useMounted, useUnMount } from '../hooks'
import { effect, reactive, toRaw } from '@vue/reactivity'
import React, { useRef, useState } from 'react'
import { Config, LifeCycles, Methods, State } from '../types'
import LeFE from '@lefe-1/api'

function initState(
  state: State,
  ctx: any,
  stateChangeCb: (state: State) => void
) {
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

function initMethods(methods: Methods, ctx: any) {
  const inited = useRef(false)

  if (inited.current) return

  Object.keys(methods).forEach(key => {
    if (!ctx[key]) {
      ctx[key] = (...args: any[]) => {
        return methods[key].apply(ctx, args)
      }
    }
  })
  inited.current = true
}

function initLifeCycles(lifeCycles: LifeCycles, ctx: any) {
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

  return ({ children }: any) => {
    const [store, setStore] = useState<State>(() => {
      return {
        ...(state || {}),
        LeFE_ID: LeFE.md5(JSON.stringify(state || {}))
      }
    })
    const ctx = getCurrentInstance(store.LeFE_ID)

    initState(state || {}, ctx, newState => {
      setStore({ ...store, ...newState })
    })
    initMethods(methods || {}, ctx)
    initLifeCycles(lifeCycles || {}, ctx)

    return (
      <provideContext.Provider value={{ state: store, methods }}>
        {children}
      </provideContext.Provider>
    )
  }
}
