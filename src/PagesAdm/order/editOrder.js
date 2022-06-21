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
import Item from "./item";
import MethodPayment from "./methodPayment";

const EditOrder = (props) => {
  const [order, setOrder] = useState(props.location.state.order);

  const { handleChangeEntity, handleSubmit, handleGoBack } = useHandle();

  const [openEnvio, setOpenEnvio] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);
  const [openItem, setOpenItem] = useState(false);

  return (
    <Layout title="Editar Pedido" description="Pagina de edição do Pedido">
      <Form onSubmit={(e) => handleSubmit(e, order, "pedido", "order")}>
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
            />

            <InputGroup.Text>Valor Total</InputGroup.Text>
            <FormControl
              className="mr-1"
              placeholder="valorTotal"
              aria-label="valorTotal"
              name="valorTotal"
              defaultValue={order.valorTotal || ""}
              onChange={(e) => handleChangeEntity(e, order, setOrder)}
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
            />
          </InputGroup>

          <Form.Group controlId="orderSelect" className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Control
              id="statusPedido"
              as="select"
              defaultValue={order.status}
              onChange={(e) => handleChangeEntity(e, order, setOrder)}
              name="status"
            >
              <option value="Aguardando Pagamento">Aguardando Pagamento</option>
              <option value="Pagamento Aprovado">Pagamento Aprovado</option>
              <option value="Pagamento Recusado">Pagamento Recusado</option>
              <option value="Pedido Cancelado">Pedido Cancelado</option>
            </Form.Control>
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
          onClick={() => setOpenPayment(!openPayment)}
          aria-controls="descricao"
          aria-expanded={openPayment}
        >
          Formas de Pagamento
        </Button>
        <Collapse in={openPayment}>
          <div id="MetodoPagamento">
            {order.pagamento.formasPagamento.map((methodPayment, index) => (
              <MethodPayment
                key={index}
                index={index}
                methodPayment={methodPayment}
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
              />
            </InputGroup>

            <Form.Group controlId="envioSelect" className="mb-3">
              <Form.Label>Status Envio</Form.Label>
              <Form.Control
                id="statusEnvio"
                as="select"
                name="statusEnvio"
                defaultValue={order.envio.statusEnvio}
                onChange={(e) => {
                  e.preventDefault();
                  order.envio[e.target.name] = e.target.value;
                  setOrder(order);
                }}
              >
                <option value="Em Processo de Aprovação">
                  Em Processo de Aprovação
                </option>
                <option value="Em Transito">Em transito</option>
                <option value="Entregue">Entregue</option>
                <option value="Retornado">Retornado</option>
              </Form.Control>
            </Form.Group>
          </div>
        </Collapse>

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

export default EditOrder;
