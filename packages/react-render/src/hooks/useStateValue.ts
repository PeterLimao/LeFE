import { useStore } from './useStore'
import LeFE from '@lefe-1/api'
import { useInstance } from '../instance'

export function useStateValue(state?: string) {
  const store = useStore()
  const ctx = useInstance()

  return {
    value: LeFE.parseValueWithData(LeFE.template(state || '', store), store),
    change: (value: string | number) => {
      const stateKey: string = LeFE.template(state, store)
      const stateKeyArr = stateKey.split('.')

      stateKeyArr.reduce((ctx, key, index) => {
        if (index >= stateKeyArr.length - 1) {
          ctx[key] = value
        }
        return ctx[key]
      }, ctx)
    }
  }
}
