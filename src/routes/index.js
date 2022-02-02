import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Database from '../pages/Database';
import ErrorPage from '../pages/ErrorPage';

export default function Routes() {


  return (

    <Switch>
      
      <Route  exact path="/" component={Home} />
      <Route exact path="/SignIn" component={SignIn} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/Database" component={Database} isPrivate />

      <Route path="*" component={ErrorPage} />

    </Switch>
  )
}