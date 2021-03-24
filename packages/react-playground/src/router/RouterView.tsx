import React from 'react'
import { routes } from './routes'
import { Switch, Route } from 'react-router-dom'
import { Page } from '@lefe-1/react-render'

const RouterView = () => {
  return (
    <Switch>
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
