import { getCurrentInstance } from '../instance'
import { Events } from '../types'

export function useEvents(events: Events) {
  const ctx = getCurrentInstance()

  return {
    trigger: (event: keyof Events, ...args: any[]) => {
      if (ctx[events[event]]) {
        ctx[events[event]](...args)
      }
    }
  }
}
