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
import category from './pages/Category';
import ScrollToTop from './components/ScrollToTop';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <ScrollToTop>
            <Header />
            <NavBar />
            <Route exact path="/" component={main} />
            <Route exact path="/signup" component={signup} />
            <Route exact path="/login" component={login} />
            <Route exact path="/product/:id" component={product} />
            <Route exact path="/category/:id" component={category} />
            <Route exact path="/category/:id/:number" component={category} />
            <Route exact path="/list/:sort" component={list} />
            <Route exact path="/cart" component={cart} />
            <Footer />
          </ScrollToTop>
        </>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
