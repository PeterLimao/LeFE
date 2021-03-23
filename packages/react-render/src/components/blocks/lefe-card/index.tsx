import React, { useCallback } from 'react'
import BlockCom from '../../Block'
import { Render } from '@/renderer'
import { renderSlot, useChildren } from '@/hooks'
import { HyperBlock } from '@/types'

const LefeCard = ({ UIComponent, props, children }: HyperBlock) => {
  const { Card } = UIComponent
  const { slotBlocks, blocks } = useChildren(children || [])

  const renderHeader = useCallback(() => {
    const slotHeaders = renderSlot('header', slotBlocks)
    return slotHeaders.length ? slotHeaders : null
  }, [])

  return (
    <Card {...props} title={renderHeader()}>
      {blocks.map((child, index) => (
        <BlockCom {...child} key={index} />
      ))}
    </Card>
  )
}

export default Render('lefe-card', LefeCard)
