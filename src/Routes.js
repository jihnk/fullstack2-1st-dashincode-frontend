import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ScrollTo from './components/SideBar/ScrollTo';
import Main from './pages/Main';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Search from './pages/Search';
import Category from './pages/Category';
import List from './pages/List';
import Product from './pages/Product/Product';
import Cart from './pages/CartPage/Cart';
import Footer from './components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <ScrollToTop>
          <Header />
          <NavBar />
          <ScrollTo />
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/category/:sort" component={Category} />
          <Route exact path="/list/:main" component={List} />
          <Route exact path="/list/:main/:sub" component={List} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/cart" component={Cart} />
          <Footer />
        </ScrollToTop>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
