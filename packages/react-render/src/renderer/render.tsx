import React from 'react'

const uiCollections: any = {}

const renderCollections: any = {}

export function Render<T>(name: string, Component: React.FC<T>) {
  function hoc(props: any) {
    return (
      <Component
        UIComponent={uiCollections[name] ? uiCollections[name] : null}
        {...props}
      />
    )
  }

  if (!renderCollections[name]) {
    renderCollections[name] = hoc
  }

  return hoc
}

export function registUIComponent(name: string, source: any) {
  if (!uiCollections[name]) {
    uiCollections[name] = source
  }
}

export { renderCollections }
