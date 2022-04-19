import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { EditIcon, MinusCircleIcon, TrashIcon } from "../../components/icons";
import LayoutAdm from "../../components/LayoutAdm";
import { formatNumber } from "../../helpers/utils";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    fetch("api/pedidos")
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  const ordersList = orders.map((order) => {
    return (
      <tr key={order.id}>
        <td className="text-center"> {order.id}</td>
        <td className="text-center"> {order.cliente.nomeCompleto}</td>
        <td className="text-center"> {order.cliente.cpf}</td>
        <td className="text-center"> {order.totalItens}</td>
        <td className="text-center"> {formatNumber(order.valorTotal)}</td>
        <td className="text-center"> {formatNumber(order.frete)}</td>
        <td className="text-center">
          <span className="rounded badge badge-info m-0">{order.status}</span>
        </td>
        <td className="text-center"> {order.dataCadastro}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" className="btn-info mr-1">
              <EditIcon width={"15px"} />
            </Button>
            <Button size="sm" className="btn-danger">
              <TrashIcon width={"15px"} />
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });

  return (
    <LayoutAdm title={"Lista Pedidos"} entityName={"Pedido"}>
      <Table id="lista" className="table table-hover table-sm">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              ID
            </th>
            <th scope="col" className="text-center">
              Cliente
            </th>
            <th scope="col" className="text-center">
              CPF
            </th>
            <th scope="col" className="text-center">
              Total de Itens
            </th>
            <th scope="col" className="text-center">
              Valor Total
            </th>
            <th scope="col" className="text-center">
              Frete
            </th>
            <th scope="col" className="text-center">
              Status
            </th>
            <th scope="col" className="text-center">
              Data Cadastro
            </th>
            <th scope="col" className="text-center">
              Ação
            </th>
          </tr>
        </thead>
        <tbody id="tbody">{ordersList}</tbody>
      </Table>
    </LayoutAdm>
  );
};

export default OrderList;
