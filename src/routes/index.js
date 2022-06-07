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
import DevolutionList from "../PagesAdm/devolution";
import UsersList from "../PagesAdm/user";
import EditProduct from "../PagesAdm/product/editProduct";
import EditClient from "../PagesAdm/client/editClient";
import EditOrder from "../PagesAdm/order/editOrder";
import EditCoupon from "../PagesAdm/coupon/editCoupon";
import EditDevolution from "../PagesAdm/devolution/editDevolution";
import GoogleCharts from "../PagesAdm/googleCharts";
import GoogleChartsOriginal from "../PagesAdm/googleCharts/google2";
import editAddress from "../pages/account/editAddress";
import EditAddress from "../pages/account/editAddress";
import EditCard from "../pages/account/editCard";

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
        <Route path="/editAddress" component={EditAddress} />
        <Route path="/editCard" component={EditCard} />

        <Route path="/register" component={Register} />
        <Route path="/detail" component={Detail} />
        <Route path="/requestDevolution" component={Devolution} />

        {/*Area do Adm*/}
        <Route path="/client" component={ClientList} />
        <Route path="/editClient" component={EditClient} />

        <Route path="/product" component={ProductList} />
        <Route path="/editProduct" component={EditProduct} />

        <Route exact path="/order" component={OrderList} />
        <Route exact path="/editOrder" component={EditOrder} />

        <Route path="/coupon" component={CouponList} />
        <Route path="/editCoupon" component={EditCoupon} />

        <Route path="/devolution" component={DevolutionList} />
        <Route path="/editDevolution" component={EditDevolution} />

        <Route path="/dashboard" component={GoogleCharts} />
        <Route path="/dashboard1" component={GoogleChartsOriginal} />

        <Route path="/user" component={UsersList} />
        <Route path="/adm" component={ProductList} />
        {/*Area do Adm*/}

        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
