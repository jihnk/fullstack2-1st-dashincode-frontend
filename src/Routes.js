import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import main from './pages/Main';
import signup from './pages/Signup';
import login from './pages/Login';
import product from './pages/Product';
import list from './pages/List';
import cart from './pages/CartPage/Cart';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={main} />
        <Route exact path="/signup" component={signup} />
        <Route exact path="/login" component={login} />
        <Route exact path="/product" component={product} />
        <Route exact path="/list" component={list} />
        <Route exact path="/cart" component={cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
