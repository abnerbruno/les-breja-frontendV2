import React, { useEffect, useState } from "react";
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
import Item from "../../PagesAdm/order/item";

const ViewerOrder = (props) => {
  const auxOrder = {
    totalItens: 0,
    valorTotal: 0.0,
    status: "",
    dataCadastro: "",
    itemsDoPedido: [
      {
        produto: {
          valorDeVenda: 0.0,
          margemDeLucro: 0.0,
          nome: "",
          status: "",
          nomeFornecedor: "",
          descricao: "",
          dataCadastro: "",
          photo: "",
          categorias: [
            {
              nome: "",
              descricao: "",
            },
          ],
        },
      },
    ],
    cliente: {
      nomeCompleto: "",
      cpf: "",
      classificacao: "",
      email: "",
      senha: "",
      telefone: "",
      dataNascimento: "",
      genero: "",
      status: "",
    },

    envio: {
      remetente: "",
      longadouro: "",
      tipoLongadouro: "",
      tipoResidencia: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
      cep: "",
      pais: "",
      frete: 0,
      statusEnvio: "",
      dataCriacao: "",
    },
  };

  const [order, setOrder] = useState(auxOrder);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    const fetchData = async () => {
      await fetch(`/api/pedido/${props.location.state.orderId}`)
        .then((response) => response.json())
        .then((data) => {
          setOrder(data);
        })
        .catch((err) => {
          console.log(err);
          return {}; //(or [], or an empty return, or any return at all)
        });
    };

    fetchData().catch(console.error);
  }, []);

  const { handleChangeEntity, handleSubmit, handleGoBack } = useHandle();

  const [openEnvio, setOpenEnvio] = useState(true);
  const [openItem, setOpenItem] = useState(true);

  const cancelarPedido = (event) => {
    event.preventDefault();

    order.status = "Pedido Cancelado";
    order.envio.statusEnvio = "Retornado";

    setOrder(order);

    fetch(`api/pedido/${props.location.state.orderId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    handleGoBack();
  };

  return (
    <Layout title="Editar Pedido" description="Pagina de edição do Pedido">
      <Form onSubmit={(e) => cancelarPedido(e)}>
        <h3 className="mt-2 mb-2 text-center">Pedido : {order.id}</h3>
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Text>Nome do Cliente</InputGroup.Text>
            <FormControl
              aria-label="Default"
              defaultValue={order.cliente.nomeCompleto || ""}
              disabled
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>CPF</InputGroup.Text>
            <FormControl
              type="text"
              aria-label="nomeFornecedor"
              defaultValue={order.cliente.cpf || ""}
              disabled
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Total de Itens</InputGroup.Text>
            <FormControl
              className="mr-1"
              placeholder="totalItens"
              aria-label="totalItens"
              name="totalItens"
              defaultValue={order.totalItens || ""}
              onChange={(e) => handleChangeEntity(e, order, setOrder)}
              disabled
            />

            <InputGroup.Text>Valor Total</InputGroup.Text>
            <FormControl
              className="mr-1"
              placeholder="valorTotal"
              aria-label="valorTotal"
              name="valorTotal"
              defaultValue={order.valorTotal || ""}
              onChange={(e) => handleChangeEntity(e, order, setOrder)}
              disabled
            />

            <InputGroup.Text>Frete</InputGroup.Text>
            <FormControl
              placeholder="frete"
              aria-label="frete"
              name="frete"
              defaultValue={order.envio.frete || ""}
              onChange={(e) => {
                e.preventDefault();
                order.envio[e.target.name] = e.target.value;
                setOrder(order);
              }}
              disabled
            />
          </InputGroup>

          <Form.Group controlId="orderSelect" className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Control
              id="statusPedido"
              defaultValue={order.status}
              onChange={(e) => handleChangeEntity(e, order, setOrder)}
              name="status"
              disabled
            ></Form.Control>
          </Form.Group>
        </div>

        <Button
          className="btn btn-primary btn-md btn-block mb-3"
          onClick={() => setOpenItem(!openItem)}
          aria-controls="descricao"
          aria-expanded={openItem}
        >
          Itens do Pedido
        </Button>
        <Collapse in={openItem}>
          <div id="itemsDoPedido">
            {order.itemsDoPedido.map((item, index) => (
              <Item
                key={index}
                index={index}
                item={item}
                order={order}
                setOrder={setOrder}
              />
            ))}
          </div>
        </Collapse>

        <Button
          className="btn btn-primary btn-md btn-block mb-3"
          onClick={() => setOpenEnvio(!openEnvio)}
          aria-controls="dadosPessoais"
          aria-expanded={openEnvio}
        >
          Envio
        </Button>
        <Collapse in={openEnvio}>
          <div id="envio">
            <InputGroup className="mb-3">
              <InputGroup.Text>Remetente</InputGroup.Text>
              <FormControl
                placeholder="Remetente"
                type="Remetente"
                aria-label="Remetente"
                name="remetente"
                defaultValue={order.envio.remetente || ""}
                onChange={(e) => {
                  e.preventDefault();
                  order.envio[e.target.name] = e.target.value;
                  setOrder(order);
                }}
                disabled
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Longadouro</InputGroup.Text>
              <FormControl
                placeholder="longadouro"
                type="longadouro"
                aria-label="longadouro"
                name="longadouro"
                defaultValue={order.envio.longadouro || ""}
                onChange={(e) => {
                  e.preventDefault();
                  order.envio[e.target.name] = e.target.value;
                  setOrder(order);
                }}
                disabled
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Tipo Longadouro</InputGroup.Text>
              <FormControl
                className="mr-1"
                placeholder="Tipo Longadouro"
                aria-label="tipoLongadouro"
                name="tipoLongadouro"
                defaultValue={order.envio.tipoLongadouro || ""}
                onChange={(e) => {
                  e.preventDefault();
                  order.envio[e.target.name] = e.target.value;
                  setOrder(order);
                }}
                disabled
              />

              <InputGroup.Text>Numero</InputGroup.Text>
              <FormControl
                placeholder="numero"
                aria-label="numero"
                name="numero"
                defaultValue={order.envio.numero || ""}
                onChange={(e) => {
                  e.preventDefault();
                  order.envio[e.target.name] = e.target.value;
                  setOrder(order);
                }}
                disabled
              />

              <InputGroup.Text>Bairro</InputGroup.Text>
              <FormControl
                className="mr-1"
                placeholder="bairro"
                aria-label="bairro"
                name="bairro"
                defaultValue={order.envio.bairro || ""}
                onChange={(e) => {
                  e.preventDefault();
                  order.envio[e.target.name] = e.target.value;
                  setOrder(order);
                }}
                disabled
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Cidade</InputGroup.Text>
              <FormControl
                className="mr-1"
                placeholder="cidade"
                aria-label="cidade"
                name="cidade"
                defaultValue={order.envio.cidade || ""}
                onChange={(e) => {
                  e.preventDefault();
                  order.envio[e.target.name] = e.target.value;
                  setOrder(order);
                }}
                disabled
              />

              <InputGroup.Text>Estado</InputGroup.Text>
              <FormControl
                className="mr-1"
                placeholder="estado"
                aria-label="estado"
                name="estado"
                defaultValue={order.envio.estado || ""}
                onChange={(e) => {
                  e.preventDefault();
                  order.envio[e.target.name] = e.target.value;
                  setOrder(order);
                }}
                disabled
              />

              <InputGroup.Text>CPF</InputGroup.Text>
              <FormControl
                placeholder="CPF"
                aria-label="CPF"
                name="cpf"
                defaultValue={order.envio.cep || ""}
                onChange={(e) => {
                  e.preventDefault();
                  order.envio[e.target.name] = e.target.value;
                  setOrder(order);
                }}
                disabled
              />

              <InputGroup.Text>Pais</InputGroup.Text>
              <FormControl
                placeholder="pais"
                aria-label="pais"
                name="pais"
                defaultValue={order.envio.pais || ""}
                onChange={(e) => {
                  e.preventDefault();
                  order.envio[e.target.name] = e.target.value;
                  setOrder(order);
                }}
                disabled
              />
            </InputGroup>

            <Form.Group controlId="envioSelect" className="mb-3">
              <Form.Label>Status Envio</Form.Label>
              <Form.Control
                id="statusEnvio"
                name="statusEnvio"
                defaultValue={order.envio.statusEnvio}
                onChange={(e) => {
                  e.preventDefault();
                  order.envio[e.target.name] = e.target.value;
                  setOrder(order);
                }}
                disabled
              ></Form.Control>
            </Form.Group>
          </div>
        </Collapse>

        <FormGroup className="col-md-12 text-center">
          {order.status !== "Pedido Cancelado" && (
            <Button id="cancelar" type="submit" className="mr-1 btn-danger">
              Cancelar
            </Button>
          )}
          <Button
            id="cancelar"
            onClick={handleGoBack}
            className="mr-1 btn-info"
          >
            Voltar
          </Button>
        </FormGroup>
      </Form>
    </Layout>
  );
};

export default ViewerOrder;
