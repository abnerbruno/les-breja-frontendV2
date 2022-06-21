import React from "react";
import { Button, ButtonGroup, FormControl, InputGroup } from "react-bootstrap";
import { PlusCircleIcon, TrashIcon } from "../../components/icons";

const Card = ({ index, card, client, setClient, openData, setOpenData }) => {
  const emptyItem = {
    NomeNoCartao: "",
    numeroCartao: "",
    validade: "",
    codigoSeguranca: "",
    tipoConta: "",
    bandeira: "",
    descricao: "Novo Cartão",
  };

  const addItem = (client, setClient, emptyItem) => {
    console.log("Criar novo elemento a Lista");
    client.cartoes.push(emptyItem);
    setClient(client);
    setOpenData(!openData);
  };

  const editItem = (event, index, client, setClient) => {
    console.log("Editar campo de um elemnto da Lista");
    client.cartoes[index][event.target.name] = event.target.value;
    setClient(client);
  };

  const deleteItem = (index, client, setClient) => {
    if (client.cartoes.length > 1) {
      console.log("Deletar um elemento da Lista");
      client.cartoes.splice(index, 1);
      setClient(client);
    }
    setOpenData(!openData);
  };

  return (
    <div>
      <h3 className="mb-4">{card.descricao}</h3>
      <InputGroup className="mb-3">
        <InputGroup.Text>Nome Completo</InputGroup.Text>
        <FormControl
          id="nomeNoCartao"
          placeholder="Nome Completo"
          aria-label="NomeNoCartao"
          name="nomeNoCartao"
          defaultValue={card.nomeNoCartao || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
          required
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Numero do Cartão</InputGroup.Text>
        <FormControl
          id="numeroCartao"
          className="mr-1"
          placeholder="Numero do Cartão"
          aria-label="numeroCartao"
          name="numeroCartao"
          defaultValue={card.numeroCartao || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
          required
        />

        <InputGroup.Text>Validade</InputGroup.Text>
        <FormControl
          id="validade"
          placeholder="Validade"
          aria-label="Validade"
          name="validade"
          type="Date"
          defaultValue={
            card.id !== undefined
              ? new Date(card.validade).toISOString().split("T")[0]
              : new Date()
          }
          onChange={(e) => editItem(e, index, client, setClient)}
          required
        />

        <InputGroup.Text>Codigo de Seguranca</InputGroup.Text>
        <FormControl
          id="codigoSeguranca"
          className="mr-1"
          placeholder="Codigo de Seguranca"
          aria-label="codigoSeguranca"
          name="codigoSeguranca"
          defaultValue={card.codigoSeguranca || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
          required
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Tipo de Conta</InputGroup.Text>
        <FormControl
          id="tipoConta"
          className="mr-1"
          placeholder="Tipo de Conta"
          as="select"
          name="tipoConta"
          defaultValue={card.tipoConta || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
          required
        >
          <option value={card.tipoConta}>
            {card.tipoConta || "Select..."}
          </option>
          <option value="Corrente">Corrente</option>
          <option value="Poupança">Poupança</option>
        </FormControl>

        <InputGroup.Text>Bandeira</InputGroup.Text>
        <FormControl
          id="bandeira"
          className="mr-1"
          placeholder="Bandeira"
          as="select"
          name="bandeira"
          defaultValue={card.bandeira || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
          required
        >
          <option value={card.bandeira}>{card.bandeira || "Select..."}</option>
          <option value="Master Card">Master Card</option>
          <option value="Visa">Visa</option>
        </FormControl>
      </InputGroup>

      <FormControl
        id="descricao"
        placeholder="descricao"
        type="descricao"
        aria-label="descricao"
        name="descricao"
        defaultValue={card.descricao || ""}
        onChange={(e) => editItem(e, index, client, setClient)}
        required
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
