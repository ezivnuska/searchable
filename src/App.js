import React, { Component } from 'react'
import routes from 'routes'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { MainLayout } from 'layouts'
import {
  NoMatch,
} from 'components'

class App extends Component {

  render() {
    return (
      <MainLayout>
        <Switch>
          {routes.map(({ path, exact, component: Component, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={props => <Component {...props} {...rest} />}
            />
          ))}
          <Route render={props => <NoMatch {...props} />} />
        </Switch>
      </MainLayout>
    )
  }
}

export default App