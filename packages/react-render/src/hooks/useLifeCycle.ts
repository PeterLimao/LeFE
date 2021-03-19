import { useEffect } from 'react'

type noop = () => void

export function useMounted(cb: noop) {
  useEffect(() => {
    cb()
  }, [])
}

export function useUnMount(cb: noop) {
  useEffect(() => {
    return () => {
      cb()
    }
  })
}
