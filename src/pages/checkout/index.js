import React, { useState } from "react";
import { useCliente } from "../../hooks/UseUser";
import { Link } from "react-router-dom";

import { Button, Col, Collapse, Form, FormControl, Row } from "react-bootstrap";

import Layout from "../../components/Layout";
import { useCart } from "../../hooks/useCart";
import { formatNumber } from "../../helpers/utils";
import FormaPagamento from "./payment";

const Checkout = () => {
  const {
    total,
    itemCount,
    cartItems,
    checkout,
    handleCheckout,
    calcularFrete,
    frete,
  } = useCart();

  const { cliente, auxPagamento, auxEnvio, handleSelectEnvio } = useCliente();

  const [pagamento, setPagamento] = useState(auxPagamento);
  const [openCatoes, setOpenCatoes] = useState(false);

  const [envio, setEnvio] = useState(auxEnvio);
  const [openEnvio, setOpenEnvio] = useState(false);

  const showTotal = () => {
    let total = pagamento.formasPagamento.reduce(
      (a, b) => a + Number(b.valor),
      0
    );

    pagamento.valorTotal = total;

    setPagamento(pagamento);
  };

  const valorObtido = (valorObtido) => {
    const valorTotal = parseFloat(total) + parseFloat(frete);

    if (valorObtido === valorTotal) {
      return "Valor Aprovado";
    } else if (valorObtido < valorTotal && valorObtido !== 0) {
      return "Valor Insuficiente";
    } else {
      return "R$ 0,00";
    }
  };

  return (
    <Layout title="Checkout" description="Checkout da Compra">
      <div className="text-center mt-5">
        <h1>Checkout</h1>
        <p>Já está batendo a sede :)</p>
      </div>

      <div className="row no-gutters justify-content-center">
        {checkout && (
          <div className="p-3 text-center">
            <h2 className="text-success">Compra Finalizada</h2>
            <Link to="/" className="btn btn-outline-success btn-sm">
              Continuar comprando
            </Link>
          </div>
        )}

        {cartItems.length > 0 && (
          <>
            <Col sm={8} className="p-1">
              <h4 className="mb-3 text-center">Endereço de Entrega</h4>
              <Form
                onSubmit={() => handleCheckout(cliente.id, pagamento, envio)}
              >
                <Button
                  id="buttonEnvio"
                  className="btn btn-primary btn-md btn-block mb-3"
                  onClick={() => {
                    setOpenEnvio(!openEnvio);
                  }}
                  aria-controls="envio"
                  aria-expanded={openEnvio}
                >
                  Envio
                </Button>
                <Collapse in={openEnvio}>
                  <div>
                    <Row className="mb-3">
                      <Col>
                        <Form.Label>Selecionar Endereço</Form.Label>
                        <Form.Control
                          id="selectEndereco"
                          as="select"
                          name="pais"
                          onChange={(e) => {
                            if (!isNaN(e.target.value)) {
                              e.preventDefault();
                              setEnvio(
                                handleSelectEnvio(
                                  cliente.enderecos[e.target.value],
                                  envio
                                )
                              );
                              setOpenEnvio(!openEnvio);
                            }
                          }}
                        >
                          <option>Select..</option>
                          {cliente.enderecos.map((endereco, index) => {
                            return (
                              <option id="options" key={index} value={index}>
                                {endereco.descricao}
                              </option>
                            );
                          })}
                        </Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Remetente</Form.Label>
                          <FormControl
                            id="remetente"
                            defaultValue={envio.remetente}
                            type="text"
                            aria-label="remetente"
                            placeholder="Remetente"
                            name="remetente"
                            onChange={(e) => {
                              envio[e.target.name] = e.target.value;
                              setEnvio(envio);
                            }}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>Longadouro</Form.Label>
                      <FormControl
                        id="longadouro"
                        type="text"
                        aria-label="longadouro"
                        placeholder="Longadouro"
                        defaultValue={envio.longadouro}
                        name="longadouro"
                        onChange={(e) => {
                          envio[e.target.name] = e.target.value;
                          setEnvio(envio);
                        }}
                        required
                      />
                    </Form.Group>

                    <Row>
                      <Col md={5} className="mb-3">
                        <Form.Label>Numero</Form.Label>
                        <Form.Control
                          type="text"
                          id="numero"
                          placeholder="Numero"
                          defaultValue={envio.numero}
                          name="numero"
                          onChange={(e) => {
                            envio[e.target.name] = e.target.value;
                            setEnvio(envio);
                          }}
                          required
                        />
                      </Col>

                      <Col md={4} className="mb-3">
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control
                          type="text"
                          id="bairro"
                          placeholder="Bairro"
                          defaultValue={envio.bairro}
                          name="bairro"
                          onChange={(e) => {
                            envio[e.target.name] = e.target.value;
                            setEnvio(envio);
                          }}
                          required
                        />
                      </Col>

                      <Col md={3} className="mb-3">
                        <Form.Label>Cidade</Form.Label>
                        <FormControl
                          id="cidade"
                          type="text"
                          placeholder="Cidade"
                          defaultValue={envio.cidade}
                          name="cidade"
                          onChange={(e) => {
                            envio[e.target.name] = e.target.value;
                            setEnvio(envio);
                          }}
                          required
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col md={4} className="mb-3">
                        <Form.Label>Pais</Form.Label>
                        <Form.Control
                          id="pais"
                          as="select"
                          name="pais"
                          defaultValue={envio.pais}
                          onChange={(e) => {
                            envio[e.target.name] = e.target.value;
                            setEnvio(envio);
                          }}
                          required
                        >
                          <option value={envio.pais}>
                            {envio.pais || "Select..."}
                          </option>
                          <option value="Brasil">Brasil</option>
                          <option value="EUA">United States</option>
                        </Form.Control>
                      </Col>

                      <Col md={4} className="mb-3">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control
                          id="estado"
                          as="select"
                          name="estado"
                          defaultValue={envio.estado}
                          onChange={(e) => {
                            envio[e.target.name] = e.target.value;
                            setEnvio(envio);
                          }}
                          required
                        >
                          <option value={envio.estado}>
                            {envio.estado || "Select..."}
                          </option>
                          <option value="São Paulo">São Paulo</option>
                          <option value="Rio de Janeiro">Rio de Janeiro</option>
                        </Form.Control>
                      </Col>

                      <Col md={4} className="mb-3">
                        <Form.Label>CEP</Form.Label>
                        <FormControl
                          type="text"
                          id="cep"
                          placeholder="CEP"
                          name="cep"
                          defaultValue={envio.cep}
                          onChange={(e) => {
                            envio[e.target.name] = e.target.value;
                            setEnvio(envio);
                          }}
                          required
                        />
                        <Button
                          id="calcularFrete"
                          size="sm"
                          className="float-right"
                          onClick={() => {
                            calcularFrete(envio.cep);
                          }}
                        >
                          Calcular Frete
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Collapse>

                <hr className="mb-4" />

                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="same-address"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="same-address"
                  >
                    O endereço de entrega é o mesmo que meu endereço de cobrança
                  </label>
                </div>

                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="save-info"
                  />
                  <label className="custom-control-label" htmlFor="save-info">
                    Salve esta informação para a próxima vez
                  </label>
                </div>

                <hr className="mb-4" />

                <h4 className="mb-3 text-center">
                  Metodo de Pagamento - Valor Obtido :
                  {isNaN(pagamento.valorTotal)
                    ? formatNumber(0)
                    : valorObtido(pagamento.valorTotal)}
                </h4>

                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      defaultChecked=""
                      required=""
                    />
                    <label className="custom-control-label" htmlFor="credit">
                      Cartão de Credito
                    </label>
                  </div>

                  <div className="custom-control custom-radio">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      required=""
                    />
                    <label className="custom-control-label" htmlFor="debit">
                      Cartão de Debito
                    </label>
                  </div>
                </div>

                <Button
                  id="showcartoes"
                  className="btn btn-primary btn-md btn-block mb-3"
                  onClick={() => {
                    showTotal();
                    setOpenCatoes(!openCatoes);
                  }}
                  aria-controls="cartões"
                  aria-expanded={openCatoes}
                >
                  Cartões
                </Button>
                <Collapse in={openCatoes}>
                  <div>
                    {pagamento.formasPagamento.map((formaPagamento, index) => (
                      <FormaPagamento
                        key={index}
                        index={index}
                        formaPagamento={formaPagamento}
                        pagamento={pagamento}
                        setPagamento={setPagamento}
                        openData={openCatoes}
                        setOpenData={setOpenCatoes}
                      />
                    ))}
                  </div>
                </Collapse>

                <hr className="mb-4" />
                <button
                  id="finalizarCompra"
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  FINALIZAR COMPRA
                </button>
              </Form>
            </Col>

            <div className="col-sm-4 p-3">
              <div className="card card-body">
                <p className="mb-1">Total de Itens</p>
                <h3 className=" mb-3 txt-right">{itemCount}</h3>
                <hr className="my-4" />
                <p className="mb-1">Frete</p>
                <h3 className=" mb-3 txt-right text-warning">
                  {isNaN(frete) ? formatNumber(0) : formatNumber(frete)}
                </h3>
                <hr className="my-4" />
                <p className="mb-1">Total a pagar</p>
                <h2 className="m-0 txt-right">
                  {formatNumber(parseFloat(total) + parseFloat(frete))}
                </h2>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Checkout;
