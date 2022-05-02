import React from "react";
import { Button, ButtonGroup, FormControl, InputGroup } from "react-bootstrap";
import { PlusCircleIcon, TrashIcon } from "../../components/icons";

const MethodmethodPayment = ({ index, methodPayment, order, setOrder }) => {
  const emptyItem = {
    NomeNoCartao: "",
    numeroCartao: "",
    validade: "",
    codigoSeguranca: "",
    tipoConta: "",
    bandeira: "",
    descricao: "",
  };

  const addItem = (order, setOrder, emptyItem) => {
    console.log("Criar novo elemento a Lista");
    order.pagamento.formasPagamento.push(emptyItem);
    setOrder(order);
  };

  const editItem = (event, index, order, setOrder) => {
    console.log("Editar campo de um elemnto da Lista");
    order.pagamento.formasPagamento[index][event.target.name] =
      event.target.value;
    setOrder(order);
  };

  const deleteItem = (index, order, setOrder) => {
    console.log("Deletar um elemento da Lista");
    order.pagamento.formasPagamento.splice(index, 1);
    setOrder(order);
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text>Nome no Cartao</InputGroup.Text>
        <FormControl
          placeholder="NomeNoCartao"
          aria-label="NomeNoCartao"
          name="nomeNoCartao"
          defaultValue={methodPayment.nomeNoCartao || ""}
          onChange={(e) => editItem(e, index, order, setOrder)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Numero Cartao</InputGroup.Text>
        <FormControl
          className="mr-1"
          placeholder="numeroCartao"
          aria-label="numeroCartao"
          name="numeroCartao"
          defaultValue={methodPayment.numeroCartao || ""}
          onChange={(e) => editItem(e, index, order, setOrder)}
        />

        <InputGroup.Text>Validade</InputGroup.Text>
        <FormControl
          placeholder="Validade"
          aria-label="Validade"
          name="Validade"
          defaultValue={methodPayment.validade || ""}
          onChange={(e) => editItem(e, index, order, setOrder)}
        />

        <InputGroup.Text>Codigo Seguranca</InputGroup.Text>
        <FormControl
          className="mr-1"
          placeholder="codigoSeguranca"
          aria-label="codigoSeguranca"
          name="codigoSeguranca"
          defaultValue={methodPayment.codigoSeguranca || ""}
          onChange={(e) => editItem(e, index, order, setOrder)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Tipo Conta</InputGroup.Text>
        <FormControl
          className="mr-1"
          placeholder="tipoConta"
          aria-label="tipoConta"
          name="tipoConta"
          defaultValue={methodPayment.tipoConta || ""}
          onChange={(e) => editItem(e, index, order, setOrder)}
        />

        <InputGroup.Text>Bandeira</InputGroup.Text>
        <FormControl
          className="mr-1"
          placeholder="bandeira"
          aria-label="bandeira"
          name="bandeira"
          defaultValue={methodPayment.bandeira || ""}
          onChange={(e) => editItem(e, index, order, setOrder)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Valor de Pagamento</InputGroup.Text>
        <FormControl
          placeholder="valor"
          aria-label="valor"
          name="valor"
          defaultValue={methodPayment.valor || ""}
          onChange={(e) => editItem(e, index, order, setOrder)}
        />
      </InputGroup>

      <ButtonGroup className="float-right">
        <Button
          size="sm"
          className="btn btn-success float-right mb-3"
          onClick={() => addItem(order, setOrder, emptyItem)}
        >
          <PlusCircleIcon width={"15px"} />
        </Button>
        <Button
          size="sm"
          className="btn btn-danger float-right mb-3"
          onClick={() => deleteItem(index, order, setOrder)}
        >
          <TrashIcon width={"15px"} />
        </Button>
      </ButtonGroup>

      <hr className="mb-4" />
    </div>
  );
};

export default MethodmethodPayment;
