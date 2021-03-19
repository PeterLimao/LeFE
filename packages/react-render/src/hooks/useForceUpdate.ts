import { useState } from 'react'

export function useForceUpdate() {
  const [_, setState] = useState(0)

  return () => {
    setState(count => count + 1)
  }
}
