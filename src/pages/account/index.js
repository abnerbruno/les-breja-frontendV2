import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import {
  ListGroup,
  Tab,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { formatNumber } from "../../helpers/utils";
import { useHandle } from "../../hooks/useHandle";

const Account = () => {
  const [cliente, setCliente] = useState([]);
  const [listaPedidos, setListaPedido] = useState([]);
  const [listaEnderecos, setListaEndereco] = useState([]);
  const [listaCartoes, setListaCartoes] = useState([]);
  const [listaTrocas, setListaTrocas] = useState([]);
  const [listaCupon, setListaCupon] = useState([]);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    fetch("api/cliente/1")
      .then((response) => response.json())
      .then((data) => {
        setCliente(data);

        setListaPedido(
          data.pedidos.map((pedido) => {
            return (
              <tr key={pedido.id}>
                <td className="text-center"> {pedido.id}</td>
                <td className="text-center"> {pedido.totalItens}</td>
                <td className="text-center">
                  {(() => {
                    switch (pedido.status) {
                      case (pedido.status = "Aguardando Pagamento"):
                        return (
                          <span className="rounded badge badge-info m-0">
                            {pedido.status}
                          </span>
                        );
                      case (pedido.status = "Pagamento Aprovado"):
                        return (
                          <span className="rounded badge badge-success m-0">
                            {pedido.status}
                          </span>
                        );
                      case (pedido.status = "Pagamento Recusado"):
                        return (
                          <span className="rounded badge badge-danger m-0">
                            {pedido.status}
                          </span>
                        );
                      case (pedido.status = "Pedido Cancelado"):
                        return (
                          <span className="rounded badge badge-danger m-0">
                            {pedido.status}
                          </span>
                        );
                      default:
                        return null;
                    }
                  })()}
                </td>
                <td className="text-center">
                  {" "}
                  {formatNumber(pedido.envio.frete)}
                </td>
                <td className="text-center">
                  {(() => {
                    switch (pedido.envio.statusEnvio) {
                      case (pedido.envio.statusEnvio =
                        "Em Processo de Aprovação"):
                        return (
                          <span className="rounded badge badge-info m-0">
                            {pedido.envio.statusEnvio}
                          </span>
                        );
                      case (pedido.envio.statusEnvio = "Em Transito"):
                        return (
                          <span className="rounded badge badge-warning m-0">
                            {pedido.envio.statusEnvio}
                          </span>
                        );
                      case (pedido.envio.statusEnvio = "Entregue"):
                        return (
                          <span className="rounded badge badge-success m-0">
                            {pedido.envio.statusEnvio}
                          </span>
                        );
                      case (pedido.envio.statusEnvio = "Retornado"):
                        return (
                          <span className="rounded badge badge-danger m-0">
                            {pedido.envio.statusEnvio}
                          </span>
                        );
                      default:
                        return null;
                    }
                  })()}
                </td>
                <td className="text-center">
                  {" "}
                  {formatNumber(pedido.valorTotal)}
                </td>
              </tr>
            );
          })
        );

        setListaEndereco(
          data.enderecos.map((endereco) => {
            return (
              <tr key={endereco.id}>
                <td className="text-center"> {endereco.id}</td>
                <td className="text-center"> {endereco.longadouro}</td>
                <td className="text-center"> {endereco.tipoResidencia}</td>
                <td className="text-center"> {endereco.cidade}</td>
                <td className="text-center"> {endereco.estado}</td>
                <td className="text-center"> {endereco.descricao}</td>
              </tr>
            );
          })
        );

        setListaCartoes(
          data.cartoes.map((cartao) => {
            return (
              <tr key={cartao.id}>
                <td className="text-center"> {cartao.id}</td>
                <td className="text-center"> {cartao.nomeNoCartao}</td>
                <td className="text-center"> {cartao.numeroCartao}</td>
                <td className="text-center"> {cartao.tipoConta}</td>
                <td className="text-center"> {cartao.bandeira}</td>
                <td className="text-center"> {cartao.descricao}</td>
              </tr>
            );
          })
        );

        setListaTrocas(
          data.trocas.map((devolution) => {
            return (
              <tr key={devolution.id}>
                <td className="text-center"> {devolution.id}</td>
                <td className="text-center">{devolution.pedido.id}</td>
                <td className="text-center">
                  {(() => {
                    switch (devolution.pedido.status) {
                      case (devolution.pedido.status = "Aguardando Pagamento"):
                        return (
                          <span className="rounded badge badge-info m-0">
                            {devolution.pedido.status}
                          </span>
                        );
                      case (devolution.pedido.status = "Pagamento Aprovado"):
                        return (
                          <span className="rounded badge badge-success m-0">
                            {devolution.pedido.status}
                          </span>
                        );
                      case (devolution.pedido.status = "Pagamento Recusado"):
                        return (
                          <span className="rounded badge badge-danger m-0">
                            {devolution.pedido.status}
                          </span>
                        );
                      case (devolution.pedido.status = "Pedido Cancelado"):
                        return (
                          <span className="rounded badge badge-danger m-0">
                            {devolution.pedido.status}
                          </span>
                        );
                      default:
                        return null;
                    }
                  })()}
                </td>
                <td className="text-center">{devolution.descricaoTroca}</td>
                <td className="text-center">
                  {(() => {
                    switch (devolution.status) {
                      case (devolution.status = "Aguardando Aprovação"):
                        return (
                          <span className="rounded badge badge-info m-0">
                            {devolution.status}
                          </span>
                        );
                      case (devolution.status = "Troca Aprovado"):
                        return (
                          <span className="rounded badge badge-success m-0">
                            {devolution.status}
                          </span>
                        );
                      case (devolution.status = "Troca Recusado"):
                        return (
                          <span className="rounded badge badge-danger m-0">
                            {devolution.status}
                          </span>
                        );
                      case (devolution.status = "Troca Cancelado"):
                        return (
                          <span className="rounded badge badge-danger m-0">
                            {devolution.status}
                          </span>
                        );
                      default:
                        return null;
                    }
                  })()}
                </td>
              </tr>
            );
          })
        );

        setListaCupon(
          data.cupoms.map((coupon) => {
            return (
              <tr key={coupon.id}>
                <td className="text-center"> {coupon.id}</td>
                <td className="text-center">{coupon.codigoCupom}</td>
                <td className="text-center">{formatNumber(coupon.valor)}</td>
                <td className="text-center">{coupon.tipoCupom}</td>
                <td className="text-center">
                  {(() => {
                    switch (coupon.status) {
                      case (coupon.status = "Ativo"):
                        return (
                          <span className="rounded badge badge-success m-0">
                            {coupon.status}
                          </span>
                        );
                      case (coupon.status = "Desativado"):
                        return (
                          <span className="rounded badge badge-danger m-0">
                            {coupon.status}
                          </span>
                        );
                      default:
                        return null;
                    }
                  })()}
                </td>
              </tr>
            );
          })
        );
      });
  }, []);

  const { handleChangeEntity, handleSubmit, handleGoBack } = useHandle();

  return (
    <Layout title="Conta Cliente" description="Esta é a pagina do Clinete">
      <Tab.Container id="account-list-group" defaultActiveKey="#link1">
        <Row className="justify-content-md-center mt-5">
          <Col sm={4}>
            <div className="author-card">
              <div className="author-card-profile mb-4">
                <div className="author-card-details">
                  <h5 className="author-card-name text-lg">
                    {cliente.nomeCompleto || "User Mock"}
                  </h5>
                  <span className="author-card-position">
                    Cadastrado : {cliente.dataCadastro || "02-02-2022 - Mock"}
                  </span>
                </div>
              </div>
            </div>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Configurações de Perfil
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Lista de Pedidos
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                Lista de Endereços
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                Lista de Cartões
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                Lista de Trocas
              </ListGroup.Item>
              <ListGroup.Item action href="#link6">
                Lista de Cupons
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <Form
                  onSubmit={(e) =>
                    handleSubmit(e, cliente, "cliente", "account")
                  }
                >
                  <InputGroup className="mb-3">
                    <InputGroup.Text>Nome</InputGroup.Text>
                    <FormControl
                      name="nomeCompleto"
                      aria-label="Default"
                      defaultValue={cliente.nomeCompleto}
                      onChange={(e) =>
                        handleChangeEntity(e, cliente, setCliente)
                      }
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text>Email</InputGroup.Text>
                    <FormControl
                      name="email"
                      type="text"
                      aria-label="email"
                      defaultValue={cliente.email || ""}
                      onChange={(e) =>
                        handleChangeEntity(e, cliente, setCliente)
                      }
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text>Senha</InputGroup.Text>
                    <FormControl
                      className="mr-1"
                      placeholder="Senha"
                      aria-label="Senha"
                      name="senha"
                      type="password"
                      defaultValue={cliente.senha || ""}
                      onChange={(e) =>
                        handleChangeEntity(e, cliente, setCliente)
                      }
                    />

                    <FormControl
                      placeholder="Repetir Senha"
                      aria-label="RepetirSenha"
                      name="senha"
                      type="password"
                      defaultValue={cliente.senha || ""}
                      onChange={(e) =>
                        handleChangeEntity(e, cliente, setCliente)
                      }
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text>Telefone</InputGroup.Text>
                    <FormControl
                      className="mr-1"
                      placeholder="Telefone (XX) XXXXX-..."
                      aria-label="Telefone"
                      name="telefone"
                      defaultValue={cliente.telefone || ""}
                      onChange={(e) =>
                        handleChangeEntity(e, cliente, setCliente)
                      }
                    />

                    <InputGroup.Text>CPF</InputGroup.Text>
                    <FormControl
                      placeholder="CPF"
                      aria-label="CPF"
                      name="cpf"
                      defaultValue={cliente.cpf || ""}
                      onChange={(e) =>
                        handleChangeEntity(e, cliente, setCliente)
                      }
                    />
                  </InputGroup>

                  <div className="col-12">
                    <hr className="mt-2 mb-3" />
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                      <div className="custom-control custom-checkbox d-block">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="subscribe_me"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="subscribe_me"
                        >
                          Receber ofertas por email
                        </label>
                      </div>
                      <button
                        className="btn btn-style-1 btn-primary"
                        type="submit"
                        data-toast=""
                        data-toast-position="topRight"
                        data-toast-type="success"
                        data-toast-icon="fe-icon-check-circle"
                        data-toast-title="Success!"
                        data-toast-message="Your profile updated successfuly."
                      >
                        Atualizar Conta
                      </button>
                    </div>
                  </div>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <div className="d-flex justify-content-end pb-3">
                  <div className="form-inline">
                    <label className="text-muted mr-3" htmlFor="order-sort">
                      Sort Orders
                    </label>
                    <select className="form-control" id="order-sort">
                      <option>All</option>
                      <option>Delivered</option>
                      <option>In Progress</option>
                      <option>Delayed</option>
                      <option>Canceled</option>
                    </select>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-sm mb-0">
                    <thead className="text-center">
                      <tr>
                        <th scope="col">ID#</th>
                        <th scope="col">Itens</th>
                        <th scope="col">Status</th>
                        <th scope="col">Frete</th>
                        <th scope="col">Envio</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>{listaPedidos}</tbody>
                  </table>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <div className="d-flex justify-content-end pb-3">
                  <div className="form-inline">
                    <label className="text-muted mr-3" htmlFor="order-sort">
                      Sort Orders
                    </label>
                    <select className="form-control" id="order-sort">
                      <option>All</option>
                      <option>Delivered</option>
                      <option>In Progress</option>
                      <option>Delayed</option>
                      <option>Canceled</option>
                    </select>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-sm mb-0">
                    <thead className="text-center">
                      <tr>
                        <th scope="col">ID#</th>
                        <th scope="col">Longadouro</th>
                        <th scope="col">Residencia</th>
                        <th scope="col">Cidade</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Descrição</th>
                      </tr>
                    </thead>
                    <tbody>{listaEnderecos}</tbody>
                  </table>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <div className="d-flex justify-content-end pb-3">
                  <div className="form-inline">
                    <label className="text-muted mr-3" htmlFor="order-sort">
                      Sort Orders
                    </label>
                    <select className="form-control" id="order-sort">
                      <option>All</option>
                      <option>Delivered</option>
                      <option>In Progress</option>
                      <option>Delayed</option>
                      <option>Canceled</option>
                    </select>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-sm mb-0">
                    <thead className="text-center">
                      <tr>
                        <th scope="col">ID#</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Numero</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Bandeira</th>
                        <th scope="col">Descrição</th>
                      </tr>
                    </thead>
                    <tbody>{listaCartoes}</tbody>
                  </table>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="#link5">
                <div className="d-flex justify-content-end pb-3">
                  <div className="form-inline">
                    <label className="text-muted mr-3" htmlFor="order-sort">
                      Sort Orders
                    </label>
                    <select className="form-control" id="order-sort">
                      <option>All</option>
                      <option>Delivered</option>
                      <option>In Progress</option>
                      <option>Delayed</option>
                      <option>Canceled</option>
                    </select>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-sm mb-0">
                    <thead className="text-center">
                      <tr>
                        <th>ID</th>
                        <th>Pedido</th>
                        <th>Status Pedido</th>
                        <th>Motivo</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>{listaTrocas}</tbody>
                  </table>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="#link6">
                <div className="d-flex justify-content-end pb-3">
                  <div className="form-inline">
                    <label className="text-muted mr-3" htmlFor="order-sort">
                      Sort Orders
                    </label>
                    <select className="form-control" id="order-sort">
                      <option>All</option>
                      <option>Delivered</option>
                      <option>In Progress</option>
                      <option>Delayed</option>
                      <option>Canceled</option>
                    </select>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead className="text-center">
                      <tr>
                        <th>ID</th>
                        <th>Cod</th>
                        <th>Valor</th>
                        <th>Tipo</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>{listaCupon}</tbody>
                  </table>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Layout>
  );
};

export default Account;
