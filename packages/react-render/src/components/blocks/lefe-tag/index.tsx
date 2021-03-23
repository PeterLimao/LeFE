import React from 'react'
import { Render } from '@/renderer'
import { HyperBlock } from '@/types'
import LeFE from '@lefe-1/api'
import { useStore } from '@/hooks'

const LefeTag = ({ UIComponent, props, render }: HyperBlock) => {
  const { Tag } = UIComponent
  const state = useStore()

  return <Tag {...props}>{LeFE.render(render, state)}</Tag>
}

export default Render('lefe-tag', LefeTag)
