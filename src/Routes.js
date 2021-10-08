import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
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
        <Route
          exact
          path="/category/:mainCategoryId/:subCategoryId"
          component={list}
        />
        <Route exact path="/cart" component={cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
