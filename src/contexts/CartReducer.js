const Storage = (cartItems) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
}; // Essa função Salva o cardItem chamado de  'Cart' para ser utilizado quando o sistema for reaberto

export const sumItems = (cartItems) => {
  //essa função faz com que seja buscado o cartItem.

  Storage(cartItems); // Salvado o cartItem no LocalStore para quando reaberto a aplicação

  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );

  let total = cartItems
    .reduce(
      (total, product) => total + product.valorDeVenda * product.quantity,
      0
    )
    .toFixed(2);

  return { itemCount, total }; // tualizado apenas o itens e o total que serão setados no state.
};

export const CartReducer = (state, action) => {
  // o State seria o initialState no CartContext sempre referenciado no CartReducer, não precisa ser passado como parametro pois já é passado
  // o action seria os valores enviados pela função do dispacher

  switch (action.type) {
    case "ADD_ITEM":
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };

    case "INCREASE":
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity++;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    case "DECREASE":
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity--;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    case "CHECKOUT":
      // POST request using fetch inside useEffect React hook
      fetch("/api/pedido", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      });

      state.frete = 0.0;

      return {
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      };

    case "CLEAR":
      return {
        cartItems: [],
        ...sumItems([]),
      };

    case "DISCOUNT":
      state.discount = action.payload;
      state.total = state.total - action.payload.valor;
      return { ...state };

    case "FRETE":
      state.frete = action.payload;
      return { ...state };

    default:
      return state;
  }
};
