import React from "react";
import Layout from "../../components/Layout";
import { Table } from "react-bootstrap";

const ProductList = () => {
  return (
    <Layout title="Lista de Produtos" description="Esta é a pagina do Clinete">
      <Table id="lista" className="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              ID
            </th>
            <th scope="col" className="text-center">
              Nome
            </th>
            <th scope="col" className="text-center">
              Nome do Fornecedor
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
              Descrição
            </th>
            <th scope="col" className="text-center">
              Data Cadastro
            </th>
            <th scope="col" className="text-center">
              Ação
            </th>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr>
            <td>1</td>
            <td>Cerveja Premium</td>
            <td>Omega Litros</td>
            <td>R$ 50.00</td>
            <td>R$ 7.00</td>
            <td>Ativo</td>
            <td>Ativo por: Possui em Estoque</td>
            <td>01/01/1999</td>
            <td>Icones</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Cerveja Premium</td>
            <td>Omega Litros</td>
            <td>R$ 50.00</td>
            <td>R$ 7.00</td>
            <td>Ativo</td>
            <td>Ativo por: Possui em Estoque</td>
            <td>01/01/1999</td>
            <td>Icones</td>
          </tr>
        </tbody>
      </Table>
    </Layout>
  );
};

export default ProductList;
