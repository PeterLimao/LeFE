import React from 'react'
import { Config } from '../types'
export declare const provideContext: React.Context<Config>
export declare function WithContainer(
  config: Config
): ({ children }: any) => JSX.Element
