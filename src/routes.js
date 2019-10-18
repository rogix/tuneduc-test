import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Users from './pages/Users';
import Posts from './pages/Posts';

export default function Routes() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/posts/:userId" component={Posts} />
      </Switch>
    </HashRouter>
  );
}
