import { useStore } from '../hooks'

const LefeIntestances: Record<string, any> = {}

export function useInstance() {
  const store = useStore()

  LefeIntestances[store.LeFE_ID] || (LefeIntestances[store.LeFE_ID] = {})

  return LefeIntestances[store.LeFE_ID]
}

export function getCurrentInstance(lefeId: string) {
  LefeIntestances[lefeId] || (LefeIntestances[lefeId] = {})

  return LefeIntestances[lefeId]
}
