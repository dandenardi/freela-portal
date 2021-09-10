import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function Routes() {


  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/SignIn" component={SignIn} />
      <Route exact path="/SignUp" component={SignUp} />
    </Switch>
  )
}