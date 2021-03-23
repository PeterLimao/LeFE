import { Events } from '../types'
export declare function useEvents(
  events: Events
): {
  trigger: (event: keyof Events, ...args: any[]) => void
}
