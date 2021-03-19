import React from 'react'
import { WithContainer } from '../renderer'
import { Config } from '../types'
import Block from './Block'

interface PageProps {
  config: Config
}

const Page = ({ config }: PageProps) => {
  const { children } = config
  const Wrapper = WithContainer(config)

  return (
    <Wrapper>
      {children.map((child, index) => (
        <Block {...child} key={index} />
      ))}
    </Wrapper>
  )
}

export default Page
