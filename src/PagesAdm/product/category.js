import React from "react";
import { Button, ButtonGroup, FormControl, InputGroup } from "react-bootstrap";
import { PlusCircleIcon, TrashIcon } from "../../components/icons";

const Category = ({ index, category, product, setProduct }) => {
  const emptyItem = {
    nome: "",
    descricao: "",
  };

  const addItem = (product, setProduct, emptyItem) => {
    console.log("Criar novo elemento a Lista");
    product.categorias.push(emptyItem);
    setProduct(product);
  };

  const editItem = (event, index, product, setProduct) => {
    console.log("Editar campo de um elemnto da Lista");
    product.categorias[index][event.target.name] = event.target.value;
    setProduct(product);
  };

  const deleteItem = (index, product, setProduct) => {
    console.log("Deletar um elemento da Lista");
    product.categorias.splice(index, 1);
    setProduct(product);
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text>Nome</InputGroup.Text>
        <FormControl
          placeholder="nome"
          aria-label="nome"
          name="nome"
          defaultValue={category.nome || ""}
          onChange={(e) => editItem(e, index, product, setProduct)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Descrição</InputGroup.Text>
        <FormControl
          placeholder="descricao"
          aria-label="descricao"
          name="descricao"
          defaultValue={category.descricao || ""}
          onChange={(e) => editItem(e, index, product, setProduct)}
        />
      </InputGroup>

      <ButtonGroup className="float-right">
        <Button
          size="sm"
          className="btn btn-success float-right mb-3"
          onClick={() => addItem(product, setProduct, emptyItem)}
        >
          <PlusCircleIcon width={"15px"} />
        </Button>
        <Button
          size="sm"
          className="btn btn-danger float-right mb-3"
          onClick={() => deleteItem(index, product, setProduct)}
        >
          <TrashIcon width={"15px"} />
        </Button>
      </ButtonGroup>

      <hr className="mb-4" />
    </div>
  );
};

export default Category;
