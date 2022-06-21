import React from "react";
import { Button, ButtonGroup, FormControl, InputGroup } from "react-bootstrap";
import { PlusCircleIcon, TrashIcon } from "../../components/icons";

const Card = ({ index, card, client, setClient }) => {
  const emptyItem = {
    NomeNoCartao: "",
    numeroCartao: "",
    validade: new Date(),
    codigoSeguranca: "",
    tipoConta: "",
    bandeira: "",
    descricao: "",
  };

  const addItem = (client, setClient, emptyItem) => {
    console.log("Criar novo elemento a Lista");
    client.cartoes.push(emptyItem);
    setClient(client);
  };

  const editItem = (event, index, client, setClient) => {
    console.log("Editar campo de um elemnto da Lista");
    client.cartoes[index][event.target.name] = event.target.value;
    setClient(client);
  };

  const deleteItem = (index, client, setClient) => {
    console.log("Deletar um elemento da Lista");
    client.cartoes.splice(index, 1);
    setClient(client);
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text>Nome No Cartao</InputGroup.Text>
        <FormControl
          placeholder="NomeNoCartao"
          aria-label="NomeNoCartao"
          name="nomeNoCartao"
          defaultValue={card.nomeNoCartao || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Numero Cartao</InputGroup.Text>
        <FormControl
          className="mr-1"
          placeholder="numeroCartao"
          aria-label="numeroCartao"
          name="numeroCartao"
          defaultValue={card.numeroCartao || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
        />

        <InputGroup.Text>Validade</InputGroup.Text>
        <FormControl
          placeholder="Validade"
          aria-label="Validade"
          name="validade"
          type="Date"
          defaultValue={new Date().toISOString().split("T")[0] || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
        />

        <InputGroup.Text>Codigo Seguranca</InputGroup.Text>
        <FormControl
          className="mr-1"
          placeholder="codigoSeguranca"
          aria-label="codigoSeguranca"
          name="codigoSeguranca"
          defaultValue={card.codigoSeguranca || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Tipo Conta</InputGroup.Text>
        <FormControl
          className="mr-1"
          placeholder="tipoConta"
          aria-label="tipoConta"
          name="tipoConta"
          defaultValue={card.tipoConta || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
        />

        <InputGroup.Text>Bandeira</InputGroup.Text>
        <FormControl
          className="mr-1"
          placeholder="bandeira"
          aria-label="bandeira"
          name="bandeira"
          defaultValue={card.bandeira || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
        />
      </InputGroup>

      <FormControl
        placeholder="descricao"
        type="descricao"
        aria-label="descricao"
        name="descricao"
        defaultValue={card.descricao || ""}
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

export default Card;
