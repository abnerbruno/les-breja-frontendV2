import React, { useState } from "react";
import {
  Button,
  Collapse,
  Form,
  FormControl,
  FormGroup,
  InputGroup,
} from "react-bootstrap";
import Layout from "../../components/Layout";
import { useHandle } from "../../hooks/useHandle";

const EditDevolution = (props) => {
  let auxDevolution = {
    status: "Aguardando Aprovação",
    descricaoTroca: "Produto vencido",
    cliente: {
      id: 1,
    },
    pedido: {
      id: 1,
    },
  };

  if (props.location.state !== undefined) {
    auxDevolution = props.location.state.devolution;
  }

  const [devolution, setDevolution] = useState(auxDevolution);

  const { handleChangeEntity, handleSubmit, handleGoBack } = useHandle();

  return (
    <Layout
      title="Editar devolution"
      description="Pagina de edição do devolution"
    >
      <Form
        onSubmit={(e) => handleSubmit(e, devolution, "troca", "devolution")}
      >
        <h3 className="mt-2 mb-2 text-center">Troca : {devolution.id}</h3>
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Text>Cliente</InputGroup.Text>
            <FormControl
              aria-label="Default"
              defaultValue={devolution.cliente.nomeCompleto}
              onChange={(e) => handleChangeEntity(e, devolution, setDevolution)}
              disabled
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Total de Itens</InputGroup.Text>
            <FormControl
              className="mr-1"
              placeholder="totalItens"
              aria-label="totalItens"
              defaultValue={devolution.pedido.totalItens || ""}
              onChange={(e) => handleChangeEntity(e, devolution, setDevolution)}
              disabled
            />

            <InputGroup.Text>Valor Total</InputGroup.Text>
            <FormControl
              placeholder="Valor Total"
              aria-label="valorTotal"
              defaultValue={devolution.pedido.valorTotal || ""}
              onChange={(e) => handleChangeEntity(e, devolution, setDevolution)}
              disabled
            />

            <InputGroup.Text>Status do Pedido</InputGroup.Text>
            <FormControl
              placeholder="Status do Pedido"
              aria-label="status"
              defaultValue={devolution.pedido.status || ""}
              onChange={(e) => handleChangeEntity(e, devolution, setDevolution)}
              disabled
            />
          </InputGroup>
        </div>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Motivo da Troca</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="descricaoTroca"
            defaultValue={devolution.descricaoTroca}
            onChange={(e) => handleChangeEntity(e, devolution, setDevolution)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicSelect" className="mb-3">
          <Form.Label>Status</Form.Label>
          <Form.Control
            id="statusTroca"
            as="select"
            defaultValue={devolution.status}
            onChange={(e) => handleChangeEntity(e, devolution, setDevolution)}
            name="status"
          >
            <option value="Aguardando Aprovação">Aguardando Aprovação</option>
            <option value="Troca Aprovado">Troca Aprovado</option>
            <option value="Troca Recusado">Troca Recusado</option>
            <option value="Troca Cancelado">Troca Cancelado</option>
          </Form.Control>
        </Form.Group>

        <FormGroup className="col-md-12 text-center">
          <Button id="salvar" type="submit" className="mr-1 btn-success">
            Salvar
          </Button>
          <Button
            id="cancelar"
            onClick={handleGoBack}
            className="mr-1 btn-danger"
          >
            Cancelar
          </Button>
        </FormGroup>
      </Form>
    </Layout>
  );
};

export default EditDevolution;
