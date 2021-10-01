import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { index } from './pages/index.js';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={index} />
    </Switch>
  );
}

export default Router;
