import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import User from './pages/User';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/user/:userId" component={User} />
    </Switch>
  );
}
