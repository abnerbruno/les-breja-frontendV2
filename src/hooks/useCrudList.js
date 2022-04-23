import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const useCrudList = () => {
  const add = (list, emptyItem) => {
    console.log("Criar novo elemento a Lista");
    list.push(emptyItem);
    return list;
  };

  const editItem = (event, index, list, entity, setEntity) => {
    console.log("Editar campo de um elemnto da Lista");

    list[index][event.target.name] = event.target.value;
    return list;
  };

  const deleteItem = (list, index) => {
    console.log("Deletar um elemnto da Lista");
    list.splice(index, 1);

    return list;
  };

  const ctx = {
    add,
    editItem,
    deleteItem,
  };

  return {
    ...ctx,
  };
};
