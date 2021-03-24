import { useStore } from './useStore'
import LeFE from '@lefe-1/api'

export function useStateValue(state?: string) {
  const store = useStore()

  return LeFE.parseValueWithData(LeFE.template(state || '', store), store)
}
