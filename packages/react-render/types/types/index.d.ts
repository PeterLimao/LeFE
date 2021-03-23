import { ComponentClass, FC } from 'react'
export declare type EnumLifeCycle = 'mounted' | 'beforeDestory'
export declare type State = Record<string, any>
export declare type Methods = Record<string, (...args: any[]) => void>
export declare type Events = Record<string, keyof Methods>
export declare type Props = Record<string, any>
export declare type Condition =
  | string
  | ((state: State, ...args: any[]) => boolean)
export declare type LifeCycles = Partial<Record<EnumLifeCycle, () => void>>
export declare type Render =
  | ((state: State, ...args: any[]) => string | number)
  | string
export declare type Block = {
  componentName: string
  render?: Render
  condition?: Condition
  props?: Props
  events?: Events
  slot_LeFE?: string
  children?: Block[]
}
export declare type Config = {
  state: State
  methods: Methods
  lifeCycles?: LifeCycles
  children?: Block[]
}
export interface HyperBlock extends Block {
  UIComponent: Record<string, FC<any> | ComponentClass<any, any>>
}
