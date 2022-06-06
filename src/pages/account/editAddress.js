import React, { useState } from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  InputGroup,
} from "react-bootstrap";
import Layout from "../../components/Layout";
import { useHandle } from "../../hooks/useHandle";

const EditAddress = (props) => {
  let auxAddress = {
    longadouro: "",
    tipoLongadouro: "",
    tipoResidencia: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    pais: "",
    descricao: "",
  };

  if (props.location.state.index !== undefined) {
    auxAddress = props.location.state.address;
  }

  const [client, setClient] = useState(props.location.state.client);
  const [address, setAddress] = useState(auxAddress);
  const index = props.location.state.index;

  const { handleSubmit, handleGoBack } = useHandle();

  const addItem = () => {
    if (index === undefined) {
      client.enderecos.push(address);
      setClient(client);
    }
  };

  const editItem = (event) => {
    if (index === undefined) {
      address[event.target.name] = event.target.value;
      setAddress(address);
    } else {
      client.enderecos[index][event.target.name] = event.target.value;
      setClient(client);
    }
  };

  const deleteItem = () => {
    client.enderecos.splice(index, 1);
    setClient(client);
  };

  return (
    <Layout title="Editar Endereço" description="Pagina de edição do client">
      <h3 className="mt-2 mb-2 text-center">
        {"Editar endereço : " + address.descricao}
      </h3>
      <Form onSubmit={(e) => handleSubmit(e, client, "cliente", "account")}>
        <InputGroup className="mb-3">
          <InputGroup.Text>Longadouro</InputGroup.Text>
          <FormControl
            placeholder="longadouro"
            type="longadouro"
            aria-label="longadouro"
            name="longadouro"
            defaultValue={address.longadouro || ""}
            onChange={(e) => editItem(e)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Tipo Residencia</InputGroup.Text>
          <FormControl
            className="mr-1"
            placeholder="Tipo Residencia"
            aria-label="tipo Residencia"
            name="tipoResidencia"
            defaultValue={address.tipoResidencia || ""}
            onChange={(e) => editItem(e)}
          />

          <InputGroup.Text>Numero</InputGroup.Text>
          <FormControl
            placeholder="numero"
            aria-label="numero"
            name="numero"
            defaultValue={address.numero || ""}
            onChange={(e) => editItem(e)}
          />

          <InputGroup.Text>Bairro</InputGroup.Text>
          <FormControl
            className="mr-1"
            placeholder="bairro"
            aria-label="bairro"
            name="bairro"
            defaultValue={address.bairro || ""}
            onChange={(e) => editItem(e)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Cidade</InputGroup.Text>
          <FormControl
            className="mr-1"
            placeholder="cidade"
            aria-label="cidade"
            name="cidade"
            defaultValue={address.cidade || ""}
            onChange={(e) => editItem(e)}
          />

          <InputGroup.Text>Estado</InputGroup.Text>
          <FormControl
            className="mr-1"
            placeholder="estado"
            aria-label="estado"
            name="estado"
            defaultValue={address.estado || ""}
            onChange={(e) => editItem(e)}
          />

          <InputGroup.Text>CEP</InputGroup.Text>
          <FormControl
            placeholder="CEP"
            aria-label="CEP"
            name="cep"
            defaultValue={address.cep || ""}
            onChange={(e) => editItem(e)}
          />

          <InputGroup.Text>Pais</InputGroup.Text>
          <FormControl
            placeholder="pais"
            aria-label="pais"
            name="pais"
            defaultValue={address.pais || ""}
            onChange={(e) => editItem(e)}
          />
        </InputGroup>

        <FormControl
          placeholder="descricao"
          aria-label="descricao"
          name="descricao"
          defaultValue={address.descricao || ""}
          onChange={(e) => editItem(e)}
        />

        <hr className="mb-4" />

        <FormGroup className="col-md-12 text-center">
          <Button type="submit" className="mr-1 btn-success" onClick={addItem}>
            Salvar
          </Button>
          <Button
            type="submit"
            className="mr-1 btn-danger"
            onClick={deleteItem}
          >
            Deletar
          </Button>
          <Button className="mr-1 btn-info" onClick={handleGoBack}>
            Cancelar
          </Button>
        </FormGroup>
      </Form>
    </Layout>
  );
};

export default EditAddress;
