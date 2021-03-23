import React from 'react'
declare const renderCollections: any
export declare function Render<T>(
  name: string,
  Component: React.FC<T>
): (props: any) => JSX.Element
export declare function registUIComponent(name: string, source: any): void
export { renderCollections }
