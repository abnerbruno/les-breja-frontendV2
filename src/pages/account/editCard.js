import React, { useState } from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  InputGroup,
} from "react-bootstrap";
import Layout from "../../components/Layout";
import { useHandle } from "../../hooks/useHandle";

const EditCard = (props) => {
  let auxCard = {
    NomeNoCartao: "",
    numeroCartao: "",
    validade: new Date(),
    codigoSeguranca: "",
    tipoConta: "",
    bandeira: "",
    descricao: "",
  };

  if (props.location.state.index !== undefined) {
    auxCard = props.location.state.card;
  }

  const [client, setClient] = useState(props.location.state.client);
  const [card, setCard] = useState(auxCard);
  const index = props.location.state.index;

  const { handleSubmit, handleGoBack } = useHandle();

  const addItem = () => {
    if (index === undefined) {
      client.cartoes.push(card);
      setClient(client);
    }
  };

  const editItem = (event) => {
    if (index === undefined) {
      card[event.target.name] = event.target.value;
      setCard(card);
    } else {
      client.cartoes[index][event.target.name] = event.target.value;
      setClient(client);
    }
  };

  const deleteItem = () => {
    client.cartoes.splice(index, 1);
    setClient(client);
  };

  return (
    <Layout title="Editar Endereço" description="Pagina de edição do client">
      <h3 className="mt-2 mb-2 text-center">
        {"Editar endereço : " + card.descricao}
      </h3>
      <Form onSubmit={(e) => handleSubmit(e, client, "cliente", "account")}>
        <InputGroup className="mb-3">
          <InputGroup.Text>Nome No Cartao</InputGroup.Text>
          <FormControl
            placeholder="NomeNoCartao"
            aria-label="NomeNoCartao"
            name="nomeNoCartao"
            defaultValue={card.nomeNoCartao || ""}
            onChange={(e) => editItem(e)}
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
            onChange={(e) => editItem(e)}
          />

          <InputGroup.Text>Validade</InputGroup.Text>
          <FormControl
            placeholder="Validade"
            aria-label="Validade"
            type="Date"
            name="validade"
            defaultValue={
              new Date(card.validade).toISOString().split("T")[0] || ""
            }
            onChange={(e) => editItem(e)}
          />

          <InputGroup.Text>Codigo Seguranca</InputGroup.Text>
          <FormControl
            className="mr-1"
            placeholder="codigoSeguranca"
            aria-label="codigoSeguranca"
            name="codigoSeguranca"
            defaultValue={card.codigoSeguranca || ""}
            onChange={(e) => editItem(e)}
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
            onChange={(e) => editItem(e)}
          />

          <InputGroup.Text>Bandeira</InputGroup.Text>
          <FormControl
            className="mr-1"
            placeholder="bandeira"
            aria-label="bandeira"
            name="bandeira"
            defaultValue={card.bandeira || ""}
            onChange={(e) => editItem(e)}
          />
        </InputGroup>

        <FormControl
          placeholder="descricao"
          type="descricao"
          aria-label="descricao"
          name="descricao"
          defaultValue={card.descricao || ""}
          onChange={(e) => editItem(e)}
        />

        <hr className="mb-4" />

        <FormGroup className="col-md-12 text-center">
          <Button type="submit" className="mr-1 btn-success" onClick={addItem}>
            Salvar
          </Button>
          <Button
            type="submit"
            className="mr-1 btn-danger"
            onClick={deleteItem}
          >
            Deletar
          </Button>
          <Button className="mr-1 btn-info" onClick={handleGoBack}>
            Cancelar
          </Button>
        </FormGroup>
      </Form>
    </Layout>
  );
};

export default EditCard;
