import React from 'react'
import { useEvents, useStore } from '../../../hooks'
import LeFE from '@lefe-1/api'
import { Render } from '../../../renderer'
import { HyperBlock } from '../../../types'

const LefeHtml = ({ props, events, render }: HyperBlock) => {
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
