import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

export const useHandle = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  const handleSubmit = (event, entity, entityName, pushTo) => {
    event.preventDefault();

    fetch(`api/${entityName}` + (entity.id ? "/" + entity.id : ""), {
      method: entity.id ? "PUT" : "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entity),
    });

    history.push("/" + pushTo);
  };

  const handleChangeEntity = (event, entity, setEntity) => {
    event.preventDefault();
    entity[event.target.name] = event.target.value;
    setEntity(entity);
  };

  const ctx = {
    handleGoBack,
    handleSubmit,
    handleChangeEntity,
  };

  return {
    ...ctx,
  };
};
