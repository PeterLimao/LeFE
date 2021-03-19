import React from 'react'
import Block from '../../Block'
import { Render } from '../../../renderer'

const LefeCard = ({ UIComponent, props, children }: any) => {
  const { Card } = UIComponent

  return (
    <Card {...props}>
      {children.map((child: any, index: number) => (
        <Block {...child} key={index} />
      ))}
    </Card>
  )
}

export default Render('lefe-card', LefeCard)
