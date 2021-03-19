import React from 'react'
import { renderCollections } from '../renderer'
import { Block } from '../types'

const BlockCom = (props: Block) => {
  const RenderComponent = renderCollections[props.componentName]

  return <RenderComponent {...props} />
}

export default BlockCom
