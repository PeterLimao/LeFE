import { useState } from 'react'
import { useInstance } from '../instance'
import { Events } from '../types'

export function useEvents(events: Events) {
  const [loading, setLoading] = useState(false)
  const ctx = useInstance()

  return {
    eventLoading: loading,
    trigger: (event: keyof Events, ...args: any[]) => {
      if (ctx[events[event]]) {
        const result = ctx[events[event]](...args)
        if (result instanceof Promise) {
          setLoading(true)
          result.then(() => {
            setLoading(false)
          })
        }
      }
    }
  }
}
