import { Condition } from '../types'
import { useStore } from './useStore'
import LeFE from '@lefe-1/api'

export function useCondition(condition?: Condition) {
  const state = useStore()

  return LeFE.parseValue(condition, state, true)
}
