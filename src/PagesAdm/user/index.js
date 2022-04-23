import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { EditIcon, TrashIcon } from "../../components/icons";
import LayoutAdm from "../../components/LayoutAdm";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    fetch("api/usuarios")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const remove = (id) => {
    fetch(`/api/usuario/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      const updatedUsers = users.filter((i) => i.id !== id);
      setUsers(updatedUsers);
    });
  };

  const usersList = users.map((user) => {
    return (
      <tr key={user.id}>
        <td className="text-center"> {user.id}</td>
        <td className="text-center"> {user.email}</td>
        <td className="text-center"> {user.senha}</td>
        <td className="text-center">
          <span className="rounded badge badge-success m-0">{user.status}</span>
        </td>
        <td className="text-center"> {user.dataCriacao}</td>
        <td className="text-center">
          <ButtonGroup>
            <Link
              to={{
                pathname: "/editUser",
                state: { user: user },
              }}
            >
              <Button size="sm" className="btn-info mr-1">
                <EditIcon width={"15px"} />
              </Button>
            </Link>

            <Button
              size="sm"
              className="btn-danger"
              onClick={() => remove(user.id)}
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
              Email
            </th>
            <th scope="col" className="text-center">
              Senha
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
        <tbody id="tbody">{usersList}</tbody>
      </Table>
    </LayoutAdm>
  );
};

export default UsersList;
