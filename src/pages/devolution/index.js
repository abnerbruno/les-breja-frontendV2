import React, { useState } from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { useCliente } from "../../hooks/UseUser";

const Devolution = () => {
  const { cliente } = useCliente();

  const auxDevolution = {
    status: "Aguardando Aprovação",
    descricaoTroca: "",
    cliente: {
      id: cliente.id,
    },

    pedido: {
      id: 1,
    },
  };

  const [devolution, setDevolution] = useState(auxDevolution);

  const [openConfirmRequest, setOpenConfirmRequest] = useState(false);

  const handleSubmit = (entity) => {
    fetch("api/troca", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entity),
    });
  };

  return (
    <Layout title="Troca" description="This is the About Troca de Produto">
      {openConfirmRequest && (
        <div className="row no-gutters justify-content-center">
          <div className="p-3 text-center">
            <h2 className="text-success">Troca Solicitada</h2>
            <Link to="/" className="btn btn-outline-success btn-sm">
              Continuar comprando
            </Link>
          </div>
        </div>
      )}

      {!openConfirmRequest && (
        <Form>
          <h3 className="mt-5">Solicitação de Devolução</h3>
          <Row>
            <Col sm={4}>
              <FormControl
                className="mb-2"
                aria-label="Default"
                placeholder="Nome Cliente"
              />

              <FormControl
                className="mb-2"
                aria-label="Default"
                placeholder="Email Cliente"
              />

              <FormControl
                className="mb-2"
                aria-label="Default"
                placeholder="Numero do Pedido"
                onChange={(e) => {
                  e.preventDefault();
                  devolution.pedido.id = Number(e.target.value);
                  setDevolution(devolution);
                }}
              />
            </Col>
            <Col sm={8}>
              <Form.Control
                as="textarea"
                rows={6}
                name="descricaoTroca"
                placeholder="Motivo da Devolução"
                onChange={(e) => {
                  e.preventDefault();
                  devolution[e.target.name] = e.target.value;
                  setDevolution(devolution);
                }}
              />
            </Col>
          </Row>

          <Button
            type="submit"
            className="mt-2 mr-1 btn-primary"
            onClick={() => {
              console.log(devolution);
              handleSubmit(devolution);
              setOpenConfirmRequest(true);
            }}
          >
            Solicitar Troca
          </Button>
        </Form>
      )}
    </Layout>
  );
};

export default Devolution;
