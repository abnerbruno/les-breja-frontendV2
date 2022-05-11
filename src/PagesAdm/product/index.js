import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EditIcon, TrashIcon } from "../../components/icons";
import LayoutAdm from "../../components/LayoutAdm";
import { formatNumber } from "../../helpers/utils";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    fetch("api/cervejas")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const remove = (id) => {
    fetch(`/api/cerveja/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      const updatedProducts = products.filter((i) => i.id !== id);
      setProducts(updatedProducts);
    });
  };

  const productsList = products.map((product) => {
    return (
      <tr key={product.id}>
        <td className="text-center"> {product.id}</td>
        <td className="text-center"> {product.nome}</td>
        <td className="text-center"> {product.nomeFornecedor}</td>
        <td className="text-center"> {formatNumber(product.valorDeVenda)}</td>
        <td className="text-center"> {formatNumber(product.margemDeLucro)}</td>
        <td className="text-center">
          {(() => {
            switch (product.status) {
              case (product.status = "Ativo"):
                return (
                  <span className="rounded badge badge-success m-0">
                    {product.status}
                  </span>
                );
              case (product.status = "Desativado"):
                return (
                  <span className="rounded badge badge-danger m-0">
                    {product.status}
                  </span>
                );
              default:
                return null;
            }
          })()}
        </td>
        <td className="text-center"> {product.estoqueProduto.quantidadeAtual}</td>
        <td className="text-center"> {product.dataCadastro}</td>
        <td className="text-center">
          <ButtonGroup>
            <Link
              to={{
                pathname: "/editProduct",
                state: { product: product },
              }}
            >
              <Button size="sm" className="btn-info mr-1">
                <EditIcon width={"15px"} />
              </Button>
            </Link>
            <Button
              size="sm"
              className="btn-danger"
              onClick={() => remove(product.id)}
            >
              <TrashIcon width={"15px"} />
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });

  return (
    <LayoutAdm title={"Lista Produtos"} entityName={"Produto"}>
      <Table id="lista" className="table table-hover table-sm">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              ID
            </th>
            <th scope="col" className="text-center">
              Nome
            </th>
            <th scope="col" className="text-center">
              Fornecedor
            </th>
            <th scope="col" className="text-center">
              Valor de Venda
            </th>
            <th scope="col" className="text-center">
              Margem de Lucro
            </th>
            <th scope="col" className="text-center">
              Status
            </th>
            <th scope="col" className="text-center">
              Estoque
            </th>
            <th scope="col" className="text-center">
              Data Cadastro
            </th>
            <th scope="col" className="text-center">
              Ação
            </th>
          </tr>
        </thead>
        <tbody id="tbody">{productsList}</tbody>
      </Table>
    </LayoutAdm>
  );
};

export default ProductList;
