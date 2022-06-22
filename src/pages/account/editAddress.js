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
    if (client.enderecos.length > 2) {
      client.enderecos.splice(index, 1);
      setClient(client);
    }
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
            <option value={address.estado}>
              {address.estado || "Select..."}
            </option>
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
            <option value={address.pais}>{address.pais || "Select..."}</option>
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

        <hr className="mb-4" />

        <FormGroup className="col-md-12 text-center">
          <Button
            type="submit"
            className="mr-1 btn-success"
            onClick={addItem}
            id="salvar"
          >
            Salvar
          </Button>
          <Button
            id="deletar"
            type="submit"
            className="mr-1 btn-danger"
            onClick={deleteItem}
          >
            Deletar
          </Button>
          <Button
            id="cancelar"
            className="mr-1 btn-info"
            onClick={handleGoBack}
          >
            Cancelar
          </Button>
        </FormGroup>
      </Form>
    </Layout>
  );
};

export default EditAddress;
