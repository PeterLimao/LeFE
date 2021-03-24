import React from 'react'
import { HyperBlock } from '../../../types'
import { Render } from '../../../renderer'
import { useChildren, useStateValue } from '../../../hooks'
import BlockCom from '../../Block'

const LefeBadge = ({ UIComponent, props, children, state }: HyperBlock) => {
  const { Badge } = UIComponent
  const { blocks } = useChildren(children || [])
  const value = useStateValue(state)

  return (
    <Badge {...props} count={value}>
      {blocks.map((block, index) => {
        return <BlockCom {...block} key={index} />
      })}
    </Badge>
  )
}

export default Render('lefe-badge', LefeBadge)
