import { ComponentClass, FC } from 'react'

export type EnumLifeCycle = 'mounted' | 'beforeDestory'

export type State = Record<string, any>

export type Methods = Record<string, (...args: any[]) => void>

export type Events = Record<string, keyof Methods>

export type Props = Record<string, any>

export type Condition = string | ((state: State, ...args: any[]) => boolean)

export type LifeCycles = Partial<Record<EnumLifeCycle, () => void>>

export type Render =
  | ((state: State, ...args: any[]) => string | number)
  | string

export type Block = {
  componentName: string
  state?: string
  render?: Render
  condition?: Condition
  props?: Props
  events?: Events
  slot_LeFE?: string
  children?: Block[]
}

export type Config = {
  state?: State
  methods?: Methods
  lifeCycles?: LifeCycles
  children?: Block[]
}

export interface HyperBlock extends Block {
  UIComponent: Record<string, FC<any> | ComponentClass<any, any>>
}
