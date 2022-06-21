import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EditIcon, TrashIcon } from "../../components/icons";
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
  }, [orders]);

  const remove = (id) => {
    fetch(`/api/pedido/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      const updatedOrders = orders.filter((i) => i.id !== id);
      setOrders(updatedOrders);
    });
  };

  const ordersList = orders.map((order) => {
    return (
      <tr key={order.id}>
        <td className="text-center"> {order.id}</td>
        <td className="text-center"> {order.cliente.nomeCompleto}</td>
        <td className="text-center"> {order.cliente.cpf}</td>
        <td className="text-center"> {order.totalItens}</td>
        <td className="text-center"> {formatNumber(order.valorTotal)}</td>
        <td className="text-center">
          {(() => {
            switch (order.status) {
              case (order.status = "Aguardando Pagamento"):
                return (
                  <span className="rounded badge badge-info m-0">
                    {order.status}
                  </span>
                );
              case (order.status = "Pagamento Aprovado"):
                return (
                  <span className="rounded badge badge-success m-0">
                    {order.status}
                  </span>
                );
              case (order.status = "Pagamento Recusado"):
                return (
                  <span className="rounded badge badge-danger m-0">
                    {order.status}
                  </span>
                );
              case (order.status = "Pedido Cancelado"):
                return (
                  <span className="rounded badge badge-danger m-0">
                    {order.status}
                  </span>
                );
              default:
                return null;
            }
          })()}
        </td>
        <td className="text-center"> {formatNumber(order.envio.frete)}</td>
        <td className="text-center">
          {(() => {
            switch (order.envio.statusEnvio) {
              case (order.envio.statusEnvio = "Em Processo de Aprovação"):
                return (
                  <span className="rounded badge badge-info m-0">
                    {order.envio.statusEnvio}
                  </span>
                );
              case (order.envio.statusEnvio = "Em Transito"):
                return (
                  <span className="rounded badge badge-warning m-0">
                    {order.envio.statusEnvio}
                  </span>
                );
              case (order.envio.statusEnvio = "Entregue"):
                return (
                  <span className="rounded badge badge-success m-0">
                    {order.envio.statusEnvio}
                  </span>
                );
              case (order.envio.statusEnvio = "Retornado"):
                return (
                  <span className="rounded badge badge-danger m-0">
                    {order.envio.statusEnvio}
                  </span>
                );
              default:
                return null;
            }
          })()}
        </td>
        <td className="text-center">
          <ButtonGroup>
            <Link
              to={{
                pathname: "/editOrder",
                state: { order: order },
              }}
            >
              <Button size="sm" className="btn-info mr-1">
                <EditIcon width={"15px"} />
              </Button>
            </Link>
            <Button
              size="sm"
              className="btn-danger"
              onClick={() => remove(order.id)}
            >
              <TrashIcon width={"15px"} />
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });

  return (
    <LayoutAdm title={"Lista Pedidos"}>
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
              Status
            </th>
            <th scope="col" className="text-center">
              Frete
            </th>
            <th scope="col" className="text-center">
              Envio
            </th>
            <th scope="col" className="text-center">
              Ação
            </th>
          </tr>
        </thead>
        <tbody id="tbody">{ordersList}</tbody>
      </Table>
      <div className="p-5 text-center">
        <Link>
          <button className="btn btn-primary">Adicionar</button>
        </Link>
      </div>
    </LayoutAdm>
  );
};

export default OrderList;
