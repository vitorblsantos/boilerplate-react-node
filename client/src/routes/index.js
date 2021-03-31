import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Base from '../components/_base'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={Base} />
  </Switch>
)

export default Routes
