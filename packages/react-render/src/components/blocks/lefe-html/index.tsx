import React from 'react'
import { useEvents, useStore } from '../../../hooks'
import LeFE from '@lefe-1/api'
import { Render } from '../../../renderer'
import { Block } from '../../../types'

interface HtmlProps extends Block {
  UIComponent: any
}

const LefeHtml = ({ props, events, render }: HtmlProps) => {
  const { trigger } = useEvents(events || {})
  const state = useStore()

  return (
    <div
      {...props}
      onClick={() => trigger('click')}
      dangerouslySetInnerHTML={{ __html: LeFE.render(render, state) }}
    ></div>
  )
}

export default Render('lefe-html', LefeHtml)
