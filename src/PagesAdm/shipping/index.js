import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EditIcon, TrashIcon } from "../../components/icons";
import LayoutAdm from "../../components/LayoutAdm";
import { formatNumber } from "../../helpers/utils";

const ShippingList = () => {
  const [shippings, setShippings] = useState([]);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    fetch("api/envios")
      .then((response) => response.json())
      .then((data) => {
        setShippings(data);
      });
  }, [shippings]);

  const remove = (id) => {
    fetch(`/api/envio/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      const updatedShippings = shippings.filter((i) => i.id !== id);
      setShippings(updatedShippings);
    });
  };

  const shippingsList = shippings.map((shipping) => {
    return (
      <tr key={shipping.id}>
        <td className="text-center"> {shipping.id}</td>
        <td className="text-center"> {shipping.pedido.id}</td>
        <td className="text-center"> {shipping.pedido.totalItens}</td>
        <td className="text-center">
          {shipping.pedido.enderecoEnvio.longadouro}
        </td>
        <td className="text-center"> {shipping.pedido.enderecoEnvio.cep}</td>
        <td className="text-center"> {formatNumber(shipping.pedido.frete)}</td>
        <td className="text-center">
          <span className="rounded badge badge-info m-0">
            {shipping.status}
          </span>
        </td>
        <td className="text-center"> {shipping.dataCriacao}</td>
        <td className="text-center">
          <ButtonGroup>
            <Button size="sm" className="btn-info mr-1">
              <EditIcon width={"15px"} />
            </Button>
            <Button
              size="sm"
              className="btn-danger"
              onClick={() => remove(shipping.id)}
            >
              <TrashIcon width={"15px"} />
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });

  return (
    <LayoutAdm title={"Lista Envios"}>
      <Table id="lista" className="table table-hover table-sm">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              ID
            </th>
            <th scope="col" className="text-center">
              Pedido
            </th>
            <th scope="col" className="text-center">
              Total de Itens
            </th>
            <th scope="col" className="text-center">
              Longadouro
            </th>
            <th scope="col" className="text-center">
              CEP
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
        <tbody id="tbody">{shippingsList}</tbody>
      </Table>
      <div className="p-5 text-center">
        <Link>
          <button className="btn btn-primary">Adicionar</button>
        </Link>
      </div>
    </LayoutAdm>
  );
};

export default ShippingList;
