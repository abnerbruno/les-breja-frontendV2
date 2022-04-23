import React from "react";
import { Button, ButtonGroup, FormControl, InputGroup } from "react-bootstrap";
import { PlusCircleIcon, TrashIcon } from "../../components/icons";

const Address = ({ index, address, client, setClient }) => {
  const emptyItem = {
    longadouro: "",
    tipoLongadouro: "",
    tipoResidencia: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    pais: "",
    descricao: "",
  };

  const addItem = (client, setClient, emptyItem) => {
    console.log("Criar novo elemento a Lista");
    client.enderecos.push(emptyItem);
    const auxCliente = client;
    setClient(auxCliente);
  };

  const editItem = (event, index, client, setClient) => {
    console.log("Editar campo de um elemnto da Lista");

    client.enderecos[index][event.target.name] = event.target.value;
    const auxCliente = client;

    setClient(auxCliente);
  };

  const deleteItem = (index, client, setClient) => {
    console.log("Deletar um elemento da Lista");
    client.enderecos.splice(index, 1);
    const auxCliente = client;

    setClient(auxCliente);
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text>Longadouro</InputGroup.Text>
        <FormControl
          placeholder="longadouro"
          type="longadouro"
          aria-label="longadouro"
          name="longadouro"
          defaultValue={address.longadouro || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Tipo Longadouro</InputGroup.Text>
        <FormControl
          className="mr-1"
          placeholder="Tipo Longadouro"
          aria-label="tipoLongadouro"
          name="tipoLongadouro"
          defaultValue={address.tipoLongadouro || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
        />

        <InputGroup.Text>Numero</InputGroup.Text>
        <FormControl
          placeholder="numero"
          aria-label="numero"
          name="numero"
          defaultValue={address.numero || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
        />

        <InputGroup.Text>Bairro</InputGroup.Text>
        <FormControl
          className="mr-1"
          placeholder="bairro"
          aria-label="bairro"
          name="bairro"
          defaultValue={address.bairro || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Cidade</InputGroup.Text>
        <FormControl
          className="mr-1"
          placeholder="cidade"
          aria-label="cidade"
          name="cidade"
          defaultValue={address.cidade || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
        />

        <InputGroup.Text>Estado</InputGroup.Text>
        <FormControl
          className="mr-1"
          placeholder="estado"
          aria-label="estado"
          name="estado"
          defaultValue={address.estado || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
        />

        <InputGroup.Text>CPF</InputGroup.Text>
        <FormControl
          placeholder="CPF"
          aria-label="CPF"
          name="cpf"
          defaultValue={address.cep || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
        />

        <InputGroup.Text>Pais</InputGroup.Text>
        <FormControl
          placeholder="pais"
          aria-label="pais"
          name="pais"
          defaultValue={address.pais || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
        />
      </InputGroup>

      <FormControl
        placeholder="descricao"
        type="descricao"
        aria-label="descricao"
        defaultValue={address.descricao || ""}
        onChange={(e) => editItem(e, index, client, setClient)}
      />

      <ButtonGroup className="float-right">
        <Button
          size="sm"
          className="btn btn-success float-right mb-3"
          onClick={() => addItem(client, setClient, emptyItem)}
        >
          <PlusCircleIcon width={"15px"} />
        </Button>
        <Button
          size="sm"
          className="btn btn-danger float-right mb-3"
          onClick={() => deleteItem(index, client, setClient)}
        >
          <TrashIcon width={"15px"} />
        </Button>
      </ButtonGroup>

      <hr className="mb-4" />
    </div>
  );
};

export default Address;
