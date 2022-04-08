import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Store from "../pages/store";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout";
import Account from "../pages/account";
import Register from "../pages/register";
import Detail from "../pages/detail";
import Devolution from "../pages/devolution";
import ProductList from "../pages/admArea";
import BrunoTeste from "../pages/BrunoTeste";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/teste" component={BrunoTeste} />
        <Route exact path="/" component={Store} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/account" component={Account} />
        <Route path="/register" component={Register} />
        <Route path="/detail" component={Detail} />
        <Route path="/devolution" component={Devolution} />
        <Route path="/adm" component={ProductList} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
