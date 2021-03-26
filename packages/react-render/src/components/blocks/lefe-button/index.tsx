import React from 'react'
import LeFE from '@lefe-1/api'
import { Render } from '../../../renderer'
import { HyperBlock } from '../../../types'
import { useStore, useEvents } from '../../../hooks'

const LefeButton = ({ UIComponent, props, render, events }: HyperBlock) => {
  const { Button } = UIComponent
  const store = useStore()
  const { trigger, eventLoading } = useEvents(events || {})

  return (
    <Button {...props} onClick={() => trigger('click')} loading={eventLoading}>
      <span
        dangerouslySetInnerHTML={{ __html: LeFE.render(render, store) }}
      ></span>
    </Button>
  )
}

export default Render('lefe-button', LefeButton)
