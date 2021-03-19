export type EnumLifeCycle = 'mounted' | 'beforeDestory'

export type State = Record<string, any>

export type Methods = Record<string, (...args: any[]) => void>

export type Events = Record<string, keyof Methods>

export type Props = Record<string, any>

export type Condition = string | ((state: State, ...args: any[]) => boolean)

export type LifeCycles = Record<EnumLifeCycle, () => void>

export type Render =
  | ((state: State, ...args: any[]) => string | number)
  | string

export type Block = {
  componentName: string
  render?: Render
  condition?: Condition
  props?: Props
  events?: Events
  children?: Block[]
}

export type Config = {
  state: State
  methods: Methods
  lifeCycles: LifeCycles
  children: Block[]
}
