import React, { useCallback } from 'react'
import { HyperBlock } from '../../../types'
import { Render } from '../../../renderer'
import { useEvents } from '../../../hooks'
import BlockCom from '../../../components/Block'

const LefeAlert = ({ UIComponent, events, children, props }: HyperBlock) => {
  const { Alert } = UIComponent
  const { trigger } = useEvents(events || {})

  const renderChildren = useCallback(() => {
    if (children && children.length) {
      return children.map((child, index) => {
        return <BlockCom {...child} key={index} />
      })
    }
  }, [])

  return (
    <Alert
      closable={true}
      onClick={() => trigger('close')}
      message={renderChildren()}
      {...props}
    />
  )
}

export default Render('lefe-alert', LefeAlert)
