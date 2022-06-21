import React, { useState } from "react";
import {
  Button,
  Collapse,
  Form,
  FormControl,
  FormGroup,
  InputGroup,
} from "react-bootstrap";
import Layout from "../../components/Layout";
import { useHandle } from "../../hooks/useHandle";
import Category from "./category";

const EditProduct = (props) => {
  let auxProduct = {
    valorDeVenda: 60.0,
    margemDeLucro: 8.0,
    nome: "",
    status: "Ativo",
    nomeFornecedor: "",
    descricao:
      "As cervejas artesanais são elaboradas por meio de um processo mais\ncuidadoso, com foco em qualidade",
    dataCadastro: "2022-05-10",
    photo: "/img/11.jpg",
    categorias: [
      {
        nome: "Artesanal",
        descricao: "Feita a Mão",
      },
    ],
    entradasEstoque: [],
    estoqueProduto: {
      quantidadeAtual: 10,
      valorBruto: 60000.0,
      dataUpdate: "2022-05-10",
    },
  };

  if (props.location.state !== undefined) {
    auxProduct = props.location.state.product;
  }

  const [product, setProduct] = useState(auxProduct);

  const {
    handleChangeEntity,
    handleChangeChildrenEntity,
    handleSubmit,
    handleGoBack,
  } = useHandle();

  const [openCategory, setOpenCategory] = useState(false);

  return (
    <Layout title="Editar product" description="Pagina de edição do product">
      <Form onSubmit={(e) => handleSubmit(e, product, "cerveja", "product")}>
        <h3 className="mt-2 mb-2 text-center">{product.nome}</h3>
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Text>Nome Produto</InputGroup.Text>
            <FormControl
              name="nome"
              aria-label="Default"
              defaultValue={product.nome}
              onChange={(e) => handleChangeEntity(e, product, setProduct)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Fornecedor</InputGroup.Text>
            <FormControl
              name="nomeFornecedor"
              type="text"
              aria-label="nomeFornecedor"
              defaultValue={product.nomeFornecedor || ""}
              onChange={(e) => handleChangeEntity(e, product, setProduct)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Descrição</InputGroup.Text>
            <FormControl
              name="descricao"
              type="text"
              aria-label="descricao"
              defaultValue={product.descricao || ""}
              onChange={(e) => handleChangeEntity(e, product, setProduct)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Valor de Venda</InputGroup.Text>
            <FormControl
              className="mr-1"
              placeholder="valor De Venda"
              aria-label="valorDeVenda"
              name="valorDeVenda"
              defaultValue={product.valorDeVenda || ""}
              onChange={(e) => handleChangeEntity(e, product, setProduct)}
            />

            <InputGroup.Text>Margem de Lucro</InputGroup.Text>
            <FormControl
              placeholder="Margem de Lucro"
              aria-label="margemDeLucro"
              name="margemDeLucro"
              defaultValue={product.margemDeLucro || ""}
              onChange={(e) => handleChangeEntity(e, product, setProduct)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Em Estoque</InputGroup.Text>
            <FormControl
              className="mr-1"
              placeholder="quantidadeAtual"
              aria-label="quantidadeAtual"
              name="quantidadeAtual"
              defaultValue={product.estoqueProduto.quantidadeAtual || ""}
              onChange={(e) =>
                handleChangeChildrenEntity(
                  e,
                  "estoqueProduto",
                  product,
                  setProduct
                )
              }
            />

            <InputGroup.Text>Imagem</InputGroup.Text>
            <FormControl
              placeholder="Imagem"
              aria-label="photo"
              name="photo"
              defaultValue={product.photo || ""}
              onChange={(e) => handleChangeEntity(e, product, setProduct)}
            />
          </InputGroup>
        </div>

        <Form.Group controlId="formBasicSelect" className="mb-3">
          <Form.Label>Status</Form.Label>
          <Form.Control
            as="select"
            defaultValue={product.status}
            onChange={(e) => handleChangeEntity(e, product, setProduct)}
            name="status"
          >
            <option value="Ativo">Ativo</option>
            <option value="Desativado">Desativado</option>
          </Form.Control>
        </Form.Group>

        <Button
          className="btn btn-primary btn-md btn-block mb-3"
          onClick={() => setOpenCategory(!openCategory)}
          aria-controls="descricao"
          aria-expanded={openCategory}
        >
          Categorias
        </Button>
        <Collapse in={openCategory}>
          <div id="categorias">
            {product.categorias.map((category, index) => (
              <Category
                key={index}
                index={index}
                category={category}
                product={product}
                setProduct={setProduct}
              />
            ))}
          </div>
        </Collapse>

        <FormGroup className="col-md-12 text-center">
          <Button id="salvar" type="submit" className="mr-1 btn-success">
            Salvar
          </Button>
          <Button
            id="cancelar"
            onClick={handleGoBack}
            className="mr-1 btn-danger"
          >
            Cancelar
          </Button>
        </FormGroup>
      </Form>
    </Layout>
  );
};

export default EditProduct;
