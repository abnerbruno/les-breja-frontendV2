import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
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
  }, [devolutions]);

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
        <td className="text-center">{devolution.cliente.nomeCompleto}</td>
        <td className="text-center"> {devolution.cliente.email}</td>
        <td className="text-center">
          {formatNumber(devolution.pedido.valorTotal)}
        </td>
        <td className="text-center">
          {(() => {
            switch (devolution.status) {
              case (devolution.status = "Aguardando Aprovação"):
                return (
                  <span className="rounded badge badge-info m-0">
                    {devolution.status}
                  </span>
                );
              case (devolution.status = "Troca Aprovado"):
                return (
                  <span className="rounded badge badge-success m-0">
                    {devolution.status}
                  </span>
                );
              case (devolution.status = "Troca Recusado"):
                return (
                  <span className="rounded badge badge-danger m-0">
                    {devolution.status}
                  </span>
                );
              case (devolution.status = "Troca Cancelado"):
                return (
                  <span className="rounded badge badge-danger m-0">
                    {devolution.status}
                  </span>
                );
              default:
                return null;
            }
          })()}
        </td>
        <td className="text-center"> {devolution.dataSolicitacao}</td>
        <td className="text-center">
          <ButtonGroup>
            <Link
              to={{
                pathname: "/editDevolution",
                state: { devolution: devolution },
              }}
            >
              <Button size="sm" className="btn-info mr-1">
                <EditIcon width={"15px"} />
              </Button>
            </Link>
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
    <LayoutAdm title={"Lista Trocas"}>
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
              Total
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
      <div className="p-5 text-center">
        <Link>
          <button className="btn btn-primary">Adicionar</button>
        </Link>
      </div>
    </LayoutAdm>
  );
};

export default DevolutionList;
