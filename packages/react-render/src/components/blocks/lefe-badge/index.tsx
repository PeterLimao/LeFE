import React from 'react'
import { HyperBlock } from '@/types'
import { Render } from '@/renderer'
import { useChildren } from '@/hooks'
import BlockCom from '../../Block'

const LefeBadge = ({ UIComponent, props, children }: HyperBlock) => {
  const { Badge } = UIComponent
  const { blocks } = useChildren(children || [])

  return (
    <Badge {...props}>
      {blocks.map((block, index) => {
        return <BlockCom {...block} key={index} />
      })}
    </Badge>
  )
}

export default Render('lefe-badge', LefeBadge)
