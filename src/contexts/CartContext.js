import React, { createContext, useReducer } from "react";
import { CartReducer, sumItems } from "./CartReducer";

export const CartContext = createContext();

const storage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const initialState = {
  cartItems: storage,
  ...sumItems(storage),
  checkout: false,
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

  const handleCheckout = () => {
    const listaDoPedido = state.cartItems.map((produto) => ({
      produto: {
        id: produto.id,
      },
      quantidade: produto.quantity,
    }));

    const pedido = {
      totalItens: state.itemCount,
      valorTotal: state.total,
      status: "Aguardando Pagamento",

      itemsDoPedido: listaDoPedido,

      cliente: {
        id: 1,
      },

      envio: {
        longadouro: "Rua Salvador Rugiero",
        tipoLongadouro: "Residencia",
        tipoResidencia: "Residencia",
        numero: "19",
        bairro: "Vila Maluf",
        cidade: "Suzano",
        estado: "Sao Paulo",
        cep: "08685-060",
        pais: "Brasil",

        frete: 50,
        statusEnvio: "Em Processo de Aprovação",
      },

      pagamentos: [
        {
          valorTotal: state.total,
          formaPagamento: {
            valor: 500,
            nomeNoCartao: "Bruno Abner",
            numeroCartao: "7654321",
            validade: "2022-04-24",
            tipoConta: "Poupanca",
            codigoSeguranca: "4321",
            bandeira: "Master Card",
          },
        },
      ],
    };

    console.log("O que esta sendo enviado", pedido);

    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedido),
    };
    fetch("/api/pedido", requestOptions);

    console.log("CHECKOUT", state);
    dispatch({ type: "CHECKOUT" });
  };

  const contextValues = {
    removeProduct,
    addProduct,
    increase,
    decrease,
    clearCart,
    handleCheckout,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
