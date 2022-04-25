import React from "react";
import Layout from "../../components/Layout";
import { ListGroup, Tab, Row, Col } from "react-bootstrap";
import { useCliente } from "../../hooks/UseUser";
import { formatNumber } from "../../helpers/utils";

const Account = () => {
  const { cliente } = useCliente();

  const listaPedidos = cliente.pedidos.map((pedido) => {
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
        <td className="text-center"> {formatNumber(pedido.envio.frete)}</td>
        <td className="text-center">
          {(() => {
            switch (pedido.envio.statusEnvio) {
              case (pedido.envio.statusEnvio = "Em Processo de Aprovação"):
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
        <td className="text-center"> {formatNumber(pedido.valorTotal)}</td>
      </tr>
    );
  });

  const listaEnderecos = cliente.enderecos.map((endereco) => {
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
  });

  const listaCartoes = cliente.cartoes.map((cartao) => {
    return (
      <tr key={cartao.id}>
        <td className="text-center"> {cartao.id}</td>
        <td className="text-center">
          {cartao.NomeNoCartao || "Bruno Abner Mock"}
        </td>
        <td className="text-center"> {cartao.numeroCartao}</td>
        <td className="text-center"> {cartao.tipoConta}</td>
        <td className="text-center"> {cartao.bandeira}</td>
        <td className="text-center"> {cartao.descricao}</td>
      </tr>
    );
  });

  const devolutionsList = cliente.trocas.map((devolution) => {
    return (
      <tr key={devolution.id}>
        <td className="text-center"> {devolution.id}</td>
        <td className="text-center">{devolution.pedido.id}</td>
        <td className="text-center">{devolution.pedido.status}</td>
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
  });

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
                <form className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-fn">First Name</label>
                      <input
                        className="form-control"
                        type="text"
                        id="account-fn"
                        defaultValue="Bruno"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-ln">Last Name</label>
                      <input
                        className="form-control"
                        type="text"
                        id="account-ln"
                        defaultValue="Abner"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-email">Email</label>
                      <input
                        className="form-control"
                        type="email"
                        id="account-email"
                        defaultValue={cliente.email}
                        disabled=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-phone">Telefone</label>
                      <input
                        className="form-control"
                        type="text"
                        id="account-phone"
                        defaultValue={cliente.telefone}
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-pass">Senha</label>
                      <input
                        className="form-control"
                        type="password"
                        id="account-pass"
                        defaultValue={cliente.senha}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-confirm-pass">
                        Confirmar Senha
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        id="account-confirm-pass"
                      />
                    </div>
                  </div>
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
                        type="button"
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
                </form>
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
                    <tbody>{devolutionsList}</tbody>
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
                    <thead>
                      <tr>
                        <th>Order #</th>
                        <th>Cupons</th>
                        <th>Status</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a
                            className="navi-link"
                            href="#order-details"
                            data-toggle="modal"
                          >
                            78A643CD409
                          </a>
                        </td>
                        <td>August 08, 2017</td>
                        <td>
                          <span className="rounded badge badge-danger m-0">
                            Canceled
                          </span>
                        </td>
                        <td>
                          <span>$760.50</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            className="navi-link"
                            href="#order-details"
                            data-toggle="modal"
                          >
                            34VB5540K83
                          </a>
                        </td>
                        <td>July 21, 2017</td>
                        <td>
                          <span className="rounded badge badge-info m-0">
                            In Progress
                          </span>
                        </td>
                        <td>$315.20</td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            className="navi-link"
                            href="#order-details"
                            data-toggle="modal"
                          >
                            112P45A90V2
                          </a>
                        </td>
                        <td>June 15, 2017</td>
                        <td>
                          <span className="rounded badge badge-warning m-0">
                            Delayed
                          </span>
                        </td>
                        <td>$1,264.00</td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            className="navi-link"
                            href="#order-details"
                            data-toggle="modal"
                          >
                            28BA67U0981
                          </a>
                        </td>
                        <td>May 19, 2017</td>
                        <td>
                          <span className="rounded badge badge-success m-0">
                            Delivered
                          </span>
                        </td>
                        <td>$198.35</td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            className="navi-link"
                            href="#order-details"
                            data-toggle="modal"
                          >
                            502TR872W2
                          </a>
                        </td>
                        <td>April 04, 2017</td>
                        <td>
                          <span className="rounded badge badge-success m-0">
                            Delivered
                          </span>
                        </td>
                        <td>$2,133.90</td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            className="navi-link"
                            href="#order-details"
                            data-toggle="modal"
                          >
                            47H76G09F33
                          </a>
                        </td>
                        <td>March 30, 2017</td>
                        <td>
                          <span className="rounded badge badge-success m-0">
                            Delivered
                          </span>
                        </td>
                        <td>$86.40</td>
                      </tr>
                    </tbody>
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
