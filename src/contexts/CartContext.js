import React, { createContext, useReducer } from "react";
import { CartReducer, sumItems } from "./CartReducer";

export const CartContext = createContext();

const storage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initialState = {
  cartItems: storage,
  ...sumItems(storage), // essa função retorna mais dois parametros ao state : itemCount e total
  checkout: false,
  discount: {},
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload });
  };

  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  const addProduct = (payload) => {
    dispatch({ type: "ADD_ITEM", payload });
  };

  const removeProduct = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const discountRequest = (codigoCupom) => {
    fetch(`api/cupom/cod/${codigoCupom}`)
      .then((response) => response.json())
      .then((payload) => {
        if (payload !== undefined) {
          dispatch({ type: "DISCOUNT", payload });
        }
      });
  };

  const handleCheckout = (pagamento, envio) => {
    const payload = {
      totalItens: state.itemCount,
      valorTotal: state.total,
      status: "Aguardando Pagamento",

      itemsDoPedido: state.cartItems.map((produto) => ({
        produto: {
          id: produto.id,
        },
        quantidade: produto.quantity,
      })),

      cliente: {
        id: 1,
      },

      envio: envio,

      pagamento: pagamento,
    };

    dispatch({ type: "CHECKOUT", payload });
  };

  const contextValues = {
    removeProduct,
    addProduct,
    increase,
    decrease,
    clearCart,
    handleCheckout,
    discountRequest,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
