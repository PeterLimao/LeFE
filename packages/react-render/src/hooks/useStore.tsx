import { useContext } from 'react'
import { provideContext } from '../renderer'

export function useStore() {
  const { state } = useContext(provideContext)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return state!
}
