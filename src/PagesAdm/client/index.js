import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EditIcon, TrashIcon } from "../../components/icons";
import LayoutAdm from "../../components/LayoutAdm";

const ClientList = () => {
  const [clients, setClients] = useState([]);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    fetch("api/clientes")
      .then((response) => response.json())
      .then((data) => {
        setClients(data);
      });
  }, []);

  console.log(clients);

  const remove = (id) => {
    fetch(`/api/cliente/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      const updatedClients = clients.filter((i) => i.id !== id);
      setClients(updatedClients);
    });
  };

  const clientList = clients.map((client) => {
    return (
      <tr key={client.id}>
        <td className="text-center"> {client.id}</td>
        <td className="text-center"> {client.nomeCompleto}</td>
        <td className="text-center"> {client.cpf}</td>
        <td className="text-center"> {client.classificacao}</td>
        <td className="text-center">
          {(() => {
            switch (client.status) {
              case (client.status = "Ativo"):
                return (
                  <span className="rounded badge badge-success m-0">
                    {client.status}
                  </span>
                );
              case (client.status = "Desativado"):
                return (
                  <span className="rounded badge badge-danger m-0">
                    {client.status}
                  </span>
                );
              default:
                return null;
            }
          })()}
        </td>
        <td className="text-center"> {client.email}</td>
        <td className="text-center"> {client.telefone}</td>
        <td className="text-center"> {client.dataNascimento}</td>
        <td className="text-center">
          <ButtonGroup>
            <Link
              to={{
                pathname: "/editClient",
                state: { client: client },
              }}
            >
              <Button size="sm" className="btn-info mr-1">
                <EditIcon width={"15px"} />
              </Button>
            </Link>
            <Button
              size="sm"
              className="btn-danger"
              onClick={() => remove(client.id)}
            >
              <TrashIcon width={"15px"} />
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });

  return (
    <LayoutAdm title={"Lista Clientes"} entityName={"Cliente"}>
      <Table id="lista" className="table table-hover table-sm">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              ID
            </th>
            <th scope="col" className="text-center">
              Nome Completo
            </th>
            <th scope="col" className="text-center">
              CPF
            </th>
            <th scope="col" className="text-center">
              Rank
            </th>
            <th scope="col" className="text-center">
              Status
            </th>
            <th scope="col" className="text-center">
              Email
            </th>
            <th scope="col" className="text-center">
              Telefone
            </th>
            <th scope="col" className="text-center">
              Data Cadastro
            </th>
            <th scope="col" className="text-center">
              Ação
            </th>
          </tr>
        </thead>
        <tbody id="tbody">{clientList}</tbody>
      </Table>
      <div className="p-5 text-center">
        <Link>
          <button className="btn btn-primary">Adicionar</button>
        </Link>
      </div>
    </LayoutAdm>
  );
};

export default ClientList;
