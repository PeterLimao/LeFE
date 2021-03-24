import React from 'react'
import LeFE from '@lefe-1/api'
import { Render } from '../../../renderer'
import { HyperBlock } from '../../../types'
import { useStore, useEvents } from '../../../hooks'

const LefeButton = ({ UIComponent, props, render, events }: HyperBlock) => {
  const { Button } = UIComponent
  const store = useStore()
  const { trigger } = useEvents(events || {})

  return (
    <Button {...props} onClick={() => trigger('click')}>
      <div
        dangerouslySetInnerHTML={{ __html: LeFE.render(render, store) }}
      ></div>
    </Button>
  )
}

export default Render('lefe-button', LefeButton)
