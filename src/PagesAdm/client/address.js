import React from "react";
import { Button, ButtonGroup, FormControl, InputGroup } from "react-bootstrap";
import { PlusCircleIcon, TrashIcon } from "../../components/icons";

const Address = ({
  index,
  address,
  client,
  setClient,
  openData,
  setOpenData,
}) => {
  const emptyItem = {
    longadouro: "",
    tipoLongadouro: "",
    tipoResidencia: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    pais: "Brasil",
    descricao: "Novo Endereço",
  };

  const addItem = (client, setClient, emptyItem) => {
    console.log("Criar novo elemento a Lista");
    client.enderecos.push(emptyItem);
    setClient(client);
    setOpenData(!openData);
  };

  const editItem = (event, index, client, setClient) => {
    console.log("Editar campo de um elemento da Lista");
    client.enderecos[index][event.target.name] = event.target.value;
    setClient(client);
  };

  const deleteItem = (index, client, setClient) => {
    if (client.enderecos.length > 2) {
      console.log("Deletar um elemento da Lista");
      client.enderecos.splice(index, 1);
      setClient(client);
    }
    setOpenData(!openData);
  };

  return (
    <div>
      <h3 className="mb-4">{address.descricao}</h3>
      <InputGroup className="mb-3">
        <InputGroup.Text>Longadouro</InputGroup.Text>
        <FormControl
          id="longadouro"
          placeholder="Longadouro"
          type="longadouro"
          aria-label="longadouro"
          name="longadouro"
          defaultValue={address.longadouro || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
          required
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Tipo Longadouro</InputGroup.Text>
        <FormControl
          id="tipoLongadouro"
          className="mr-1"
          placeholder="Tipo Longadouro"
          aria-label="tipoLongadouro"
          name="tipoLongadouro"
          defaultValue={address.tipoLongadouro || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
          required
        />

        <InputGroup.Text>Numero</InputGroup.Text>
        <FormControl
          id="numero"
          placeholder="Numero"
          aria-label="numero"
          name="numero"
          defaultValue={address.numero || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
          required
        />

        <InputGroup.Text>Bairro</InputGroup.Text>
        <FormControl
          id="bairro"
          className="mr-1"
          placeholder="Bairro"
          aria-label="bairro"
          name="bairro"
          defaultValue={address.bairro || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
          required
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Cidade</InputGroup.Text>
        <FormControl
          id="cidade"
          className="mr-1"
          placeholder="Cidade"
          aria-label="cidade"
          name="cidade"
          defaultValue={address.cidade || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
          required
        />

        <InputGroup.Text>Estado</InputGroup.Text>
        <FormControl
          id="estado"
          className="mr-1"
          as="select"
          placeholder="Estado"
          aria-label="estado"
          name="estado"
          defaultValue={address.estado}
          onChange={(e) => editItem(e, index, client, setClient)}
          required
        >
          <option value="">{address.estado || "Select..."}</option>
          <option value="São Paulo">São Paulo</option>
          <option value="Rio de Janeiro">Rio de Janeiro</option>
        </FormControl>

        <InputGroup.Text>Pais</InputGroup.Text>
        <FormControl
          id="pais"
          as="select"
          className="mr-1"
          placeholder="Pais"
          aria-label="pais"
          name="pais"
          defaultValue={address.pais || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
          required
        >
          <option value="">{address.pais || "Select..."}</option>
          <option value="Brasil">Brasil</option>
          <option value="EUA">United States</option>
        </FormControl>

        <InputGroup.Text>CEP</InputGroup.Text>
        <FormControl
          id="cep"
          placeholder="CEP"
          aria-label="cep"
          name="cep"
          defaultValue={address.cep || ""}
          onChange={(e) => editItem(e, index, client, setClient)}
          required
        />
      </InputGroup>

      <FormControl
        id="descricao"
        placeholder="Descricao"
        type="descricao"
        aria-label="descricao"
        name="descricao"
        defaultValue={address.descricao || ""}
        onChange={(e) => editItem(e, index, client, setClient)}
        required
      />

      <ButtonGroup className="float-right">
        <Button
          size="sm"
          className="btn btn-success float-right mb-3"
          onClick={() => addItem(client, setClient, emptyItem)}
        >
          <PlusCircleIcon width={"15px"} />
        </Button>
        <Button
          size="sm"
          className="btn btn-danger float-right mb-3"
          onClick={() => deleteItem(index, client, setClient)}
        >
          <TrashIcon width={"15px"} />
        </Button>
      </ButtonGroup>

      <hr className="mb-4" />
    </div>
  );
};

export default Address;
