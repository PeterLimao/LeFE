import React from 'react'
import { useEvents, useStateValue } from '../../../hooks'
import { HyperBlock } from '../../../types'
import { Render } from '../../../renderer'

const LefeInput = ({ UIComponent, props, state, events }: HyperBlock) => {
  const { Input } = UIComponent
  const { value, change } = useStateValue(state)
  const { trigger } = useEvents(events || {})

  return (
    <Input
      {...props}
      defaultValue={value}
      onChange={(e: any) => {
        change(e.target.value)
        trigger('change')
      }}
      onBlur={() => trigger('blur')}
      onFocus={() => trigger('focus')}
    />
  )
}

export default Render('lefe-input', LefeInput)
