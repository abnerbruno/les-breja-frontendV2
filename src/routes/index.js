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
import ClientList from "../PagesAdm/client";
import BrunoTeste from "../pages/BrunoTeste";
import ProductList from "../PagesAdm/product";
import OrderList from "../PagesAdm/order";
import CouponList from "../PagesAdm/coupon";
import ShippingList from "../PagesAdm/shipping";
import DevolutionList from "../PagesAdm/devolution";
import UsersList from "../PagesAdm/user";
import editClient from "../PagesAdm/client/editClient";

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
        <Route path="/requestDevolution" component={Devolution} />

        {/*Area do Adm*/}
        <Route path="/client" component={ClientList} />
        <Route path="/editClient" component={editClient} />
        <Route path="/product" component={ProductList} />
        <Route exact path="/order" component={OrderList} />
        <Route path="/coupon" component={CouponList} />
        <Route path="/shipping" component={ShippingList} />
        <Route path="/devolution" component={DevolutionList} />
        <Route path="/user" component={UsersList} />
        <Route path="/adm" component={ProductList} />
        {/*Area do Adm*/}

        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
