import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
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

  const clientList = clients.map((client) => {
    return (
      <tr key={client.id}>
        <td className="text-center"> {client.id}</td>
        <td className="text-center"> {client.nomeCompleto}</td>
        <td className="text-center"> {client.cpf}</td>
        <td className="text-center"> {client.classificacao}</td>
        <td className="text-center">
          <span className="rounded badge badge-success m-0">
            {client.status}
          </span>
        </td>
        <td className="text-center"> {client.email}</td>
        <td className="text-center"> {client.telefone}</td>
        <td className="text-center"> {client.dataNascimento}</td>
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
    </LayoutAdm>
  );
};

export default ClientList;
