import { useContext } from 'react'
import { provideContext } from '../renderer'

export function useStore() {
  const { state } = useContext(provideContext)
  return state
}
