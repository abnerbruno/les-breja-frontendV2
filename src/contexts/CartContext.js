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
  frete: 0,
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
    const numberCheck = isNaN(codigoCupom);

    if (numberCheck) {
      fetch(`api/cupom/cod/${codigoCupom}`)
        .then((response) => response.json())
        .then((payload) => {
          if (payload !== undefined) {
            dispatch({ type: "DISCOUNT", payload });
          }
        })
        .catch((error) => console.log(error));
    }
  };

  const calcularFrete = (sCepOrigem) => {
    const pattern = /^[0-9]{5}-[0-9]{3}|[0-9]{8}$/;

    if (pattern.test(sCepOrigem)) {
      const { calcularPrecoPrazo } = require("correios-brasil");

      let args = {
        // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
        sCepOrigem: sCepOrigem,
        sCepDestino: "09751000",
        nVlPeso: "1",
        nCdFormato: "1",
        nVlComprimento: "20",
        nVlAltura: "20",
        nVlLargura: "20",
        nCdServico: ["04014"], //Array com os códigos de serviço
        nVlDiametro: "0",
      };

      calcularPrecoPrazo(args)
        .then((response) => {
          if (response !== undefined) {
            const payload = parseFloat(response[0].Valor).toFixed(2);
            dispatch({ type: "FRETE", payload });
          }
        })
        .catch((error) => console.log(error));
    }
  };

  const handleCheckout = (clienteId, pagamento, envio) => {
    const valorTotalPedido = parseFloat(state.total) + parseFloat(state.frete);
    envio.frete = state.frete;

    const payload = {
      totalItens: state.itemCount,
      valorTotal: valorTotalPedido,
      status: "Aguardando Pagamento",

      itemsDoPedido: state.cartItems.map((produto) => ({
        produto: {
          id: produto.id,
        },

        quantidade: produto.quantity,

        status: "Em Processo",
      })),

      cliente: {
        id: clienteId,
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
    calcularFrete,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
