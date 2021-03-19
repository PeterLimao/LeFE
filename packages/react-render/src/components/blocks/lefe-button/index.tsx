import React from 'react'
import LeFE from '@lefe-1/api'
import { Render } from '../../../renderer'
import { Block } from '../../../types'
import { useStore, useEvents } from '../../../hooks'

interface ButtonProps extends Block {
  UIComponent: any
}

const LefeButton = ({ UIComponent, props, render, events }: ButtonProps) => {
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
