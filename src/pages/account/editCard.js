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
    if (client.cartoes.length > 1) {
      client.cartoes.splice(index, 1);
      setClient(client);
    }
  };

  return (
    <Layout title="Editar Endereço" description="Pagina de edição do client">
      <h3 className="mt-2 mb-2 text-center">
        {"Editar Cartão : " + card.descricao}
      </h3>
      <Form onSubmit={(e) => handleSubmit(e, client, "cliente", "account")}>
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
            <option value={card.bandeira}>
              {card.bandeira || "Select..."}
            </option>
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

        <hr className="mb-4" />

        <FormGroup className="col-md-12 text-center">
          <Button
            id="salvar"
            type="submit"
            className="mr-1 btn-success"
            onClick={addItem}
          >
            Salvar
          </Button>
          <Button
            id="deletar"
            type="submit"
            className="mr-1 btn-danger"
            onClick={deleteItem}
          >
            Deletar
          </Button>
          <Button
            id="cancelar"
            className="mr-1 btn-info"
            onClick={handleGoBack}
          >
            Cancelar
          </Button>
        </FormGroup>
      </Form>
    </Layout>
  );
};

export default EditCard;
