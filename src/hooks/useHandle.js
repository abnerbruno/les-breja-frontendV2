import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

export const useHandle = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  const handleSubmit = (event, entity, entityName) => {
    event.preventDefault();

    fetch(`api/${entityName}` + (entity.id ? "/" + entity.id : ""), {
      method: entity.id ? "PUT" : "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entity),
    });

    history.goBack();
  };

  const handleChangeEntity = (event, entity, setEntity) => {
    event.preventDefault();
    const auxEntity = entity;
    auxEntity[event.target.name] = event.target.value;
    setEntity(auxEntity);
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
