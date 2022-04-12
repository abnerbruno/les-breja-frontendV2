import React, { createContext, useState, useEffect } from "react";
import { dummyUser } from "../services/dummyUser";
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [cliente, setCliente] = useState(dummyUser);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    fetch("api/cliente/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data !== undefined) {
          setCliente(data);
        }
      });
  }, []);

  return (
    <UserContext.Provider value={{ cliente }}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
