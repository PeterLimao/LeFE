import React from 'react'
import { useCondition } from '../hooks'
import { renderCollections } from '../renderer'
import { Block } from '../types'

const BlockCom = (props: Block) => {
  const RenderComponent = renderCollections[props.componentName]
  const vif = useCondition(props.condition)

  if (vif) {
    return <RenderComponent {...props} />
  }
  return null
}

export default BlockCom
