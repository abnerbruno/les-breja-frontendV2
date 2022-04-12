import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import * as serviceWorker from "./serviceWorker";

import { HelmetProvider } from "react-helmet-async";
import ProductsContextProvider from "./contexts/ProductsContext";
import CartContextProvider from "./contexts/CartContext";
import UserContextProvider from "./contexts/UserContext";

ReactDOM.render(
  <HelmetProvider>
    <UserContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <Routes />
        </CartContextProvider>
      </ProductsContextProvider>
    </UserContextProvider>
  </HelmetProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
