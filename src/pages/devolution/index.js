import React, { useState } from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { useCliente } from "../../hooks/UseUser";

const Devolution = () => {
  const { cliente } = useCliente();

  let auxDevolution = {
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
            <Link
              id="continuarComprando"
              to="/"
              className="btn btn-outline-success btn-sm"
            >
              Continuar comprando
            </Link>
          </div>
        </div>
      )}

      {!openConfirmRequest && (
        <Form
          onSubmit={() => {
            console.log(devolution);
            handleSubmit(devolution);
            setOpenConfirmRequest(true);
          }}
        >
          <h3 className="mt-5">Solicitação de Devolução</h3>
          <Row>
            <Col sm={4}>
              <FormControl
                id="nomeCliente"
                className="mb-2"
                aria-label="Default"
                placeholder="Nome Cliente"
                required
              />

              <FormControl
                id="emailCliente"
                className="mb-2"
                aria-label="Default"
                placeholder="Email Cliente"
                required
              />

              <FormControl
                id="numeroPedido"
                className="mb-2"
                aria-label="Default"
                placeholder="Numero do Pedido"
                onChange={(e) => {
                  e.preventDefault();
                  devolution.pedido.id = Number(e.target.value);
                  console.log("pedido id" + devolution.pedido.id);
                  setDevolution(devolution);
                }}
                required
              />
            </Col>
            <Col sm={8}>
              <Form.Control
                id="motivoDevolucao"
                as="textarea"
                rows={6}
                name="descricaoTroca"
                placeholder="Motivo da Devolução"
                onChange={(e) => {
                  e.preventDefault();
                  devolution[e.target.name] = e.target.value;
                  setDevolution(devolution);
                }}
                required
              />
            </Col>
          </Row>

          <Button
            id="solicitarTroca"
            type="submit"
            className="mt-2 mr-1 btn-primary"
          >
            Solicitar Troca
          </Button>
        </Form>
      )}
    </Layout>
  );
};

export default Devolution;
