import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { EditIcon, TrashIcon } from "../../components/icons";
import LayoutAdm from "../../components/LayoutAdm";
import { formatNumber } from "../../helpers/utils";

const DevolutionList = () => {
  const [devolutions, setDevolutions] = useState([]);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    fetch("api/trocas")
      .then((response) => response.json())
      .then((data) => {
        setDevolutions(data);
      });
  }, []);

  const remove = (id) => {
    fetch(`/api/troca/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      const updatedDevolutions = devolutions.filter((i) => i.id !== id);
      setDevolutions(updatedDevolutions);
    });
  };

  const devolutionsList = devolutions.map((devolution) => {
    return (
      <tr key={devolution.id}>
        <td className="text-center"> {devolution.id}</td>
        <td className="text-center">{devolution.pedido.id}</td>
        <td className="text-center">
          {devolution.pedido.cliente.nomeCompleto}
        </td>
        <td className="text-center"> {devolution.pedido.cliente.email}</td>
        <td className="text-center">{devolution.descricaoTroca}</td>
        <td className="text-center">
          {formatNumber(devolution.valorDesconto)}
        </td>
        <td className="text-center">
          <span className="rounded badge badge-success m-0">
            {devolution.status}
          </span>
        </td>
        <td className="text-center"> {devolution.dataSolicitacao}</td>
        <td className="text-center">
          <ButtonGroup>
            <Button size="sm" className="btn-info mr-1">
              <EditIcon width={"15px"} />
            </Button>
            <Button
              size="sm"
              className="btn-danger"
              onClick={() => remove(devolution.id)}
            >
              <TrashIcon width={"15px"} />
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });

  return (
    <LayoutAdm title={"Lista Trocas"} entityName={"Troca"}>
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
              Cliente
            </th>
            <th scope="col" className="text-center">
              Email
            </th>
            <th scope="col" className="text-center">
              Motivo
            </th>
            <th scope="col" className="text-center">
              Desconto
            </th>
            <th scope="col" className="text-center">
              Status
            </th>
            <th scope="col" className="text-center">
              Solicitação
            </th>
            <th scope="col" className="text-center">
              Ação
            </th>
          </tr>
        </thead>
        <tbody id="tbody">{devolutionsList}</tbody>
      </Table>
    </LayoutAdm>
  );
};

export default DevolutionList;
