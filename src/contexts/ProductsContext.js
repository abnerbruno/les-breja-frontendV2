import React, { createContext, useState, useEffect } from "react";
import { dummyProducts } from "../services/dummy";
export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState(dummyProducts);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    fetch("api/cervejas")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data !== undefined) {
          setProducts(data);
        }
      });
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
