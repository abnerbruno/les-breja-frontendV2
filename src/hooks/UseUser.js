import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const useCliente = () => {
  const ctx = useContext(UserContext);

  return {
    ...ctx,
  };
};
