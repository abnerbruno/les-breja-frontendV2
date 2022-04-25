import React from "react";
import { Button, ButtonGroup, FormControl, InputGroup } from "react-bootstrap";
import { PlusCircleIcon, TrashIcon } from "../../components/icons";

const Item = ({ index, item, order, setOrder }) => {
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
    order.itemsDoPedido.push(emptyItem);
    setOrder(order);
  };

  const editItem = (event, index, order, setOrder) => {
    console.log("Editar campo de um elemnto da Lista");
    order.itemsDoPedido[index][event.target.name] = event.target.value;
    setOrder(order);
  };

  const deleteItem = (index, order, setOrder) => {
    console.log("Deletar um elemento da Lista");
    order.itemsDoPedido.splice(index, 1);
    setOrder(order);
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text>Produto</InputGroup.Text>
        <FormControl
          placeholder="Produto"
          aria-label="Produto"
          defaultValue={item.produto.nome || ""}
          disabled
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Valor Unitario</InputGroup.Text>
        <FormControl
          className="mr-1"
          placeholder="Valor Unitario"
          aria-label="Valor Unitario"
          defaultValue={item.produto.valorDeVenda || ""}
          onChange={(e) => editItem(e, index, order, setOrder)}
          disabled
        />

        <InputGroup.Text>Quantidade</InputGroup.Text>
        <FormControl
          placeholder="Validade"
          aria-label="Validade"
          name="Validade"
          defaultValue={item.quantidade || ""}
          onChange={(e) => editItem(e, index, order, setOrder)}
          disabled
        />

        <InputGroup.Text>Status</InputGroup.Text>
        <FormControl
          className="mr-1"
          placeholder="codigoSeguranca"
          aria-label="codigoSeguranca"
          name="codigoSeguranca"
          defaultValue={item.produto.status || ""}
          disabled
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

export default Item;
