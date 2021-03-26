import React from 'react'
import { routes } from './routes'
import { Switch, Route } from 'react-router-dom'
import { Page } from '@lefe-1/react-render'
import Playground from '@/pages/Playground'

const RouterView = () => {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <Playground />
      </Route>
      {routes.map(({ name, path, config }) => {
        return (
          <Route path={path} key={name}>
            <Page config={config} />
          </Route>
        )
      })}
    </Switch>
  )
}

export default RouterView
