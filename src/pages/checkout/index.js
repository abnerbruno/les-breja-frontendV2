import React from "react";
import { Link } from "react-router-dom";

import Layout from "../../components/Layout";
import { useCart } from "../../hooks/useCart";
import { formatNumber } from "../../helpers/utils";

const Checkout = () => {
  const { total, itemCount, cartItems, checkout, handleCheckout } = useCart();

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
            <div className="col-sm-8 p-1">
              <h4 className="mb-3">Endereço de Cobrança</h4>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">Primeiro Nome</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">Sobrenome</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="username">Username</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      required=""
                    />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email">
                    Email <span className="text-muted">(opcional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="...@gmail.com"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="address">Endereço</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Rua General Oliveira"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="address2">
                    Endereço 2 <span className="text-muted">(opcional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Condominio / Apartamento"
                  />
                </div>

                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label htmlFor="country">Pais</label>
                    <select
                      className="custom-select d-block w-100"
                      id="country"
                      required=""
                    >
                      <option value="">Select...</option>
                      <option>Brasil</option>
                      <option>United States</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state">Estado</label>
                    <select
                      className="custom-select d-block w-100"
                      id="state"
                      required=""
                    >
                      <option value="">Select...</option>
                      <option>São Paulo</option>
                      <option>Rio de Janeiro</option>
                      <option>California</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="zip">CEP</label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>

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

                <h4 className="mb-3">Metodo de Pagamento</h4>

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

                  <div className="custom-control custom-radio">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      required=""
                    />
                    <label className="custom-control-label" htmlFor="paypal">
                      PIX
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-name">Nome no cartão</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-name"
                      placeholder=""
                      required=""
                    />
                    <small className="text-muted">
                      Nome completo conforme exibido no cartão
                    </small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-number">
                      Número do Cartão de Crédito
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-number"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3 mb-3">
                    <label htmlFor="cc-expiration">Validade</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="cc-cvv">Cod. Segurança</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
                <hr className="mb-4" />
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="button"
                  onClick={handleCheckout}
                >
                  FINALIZAR COMPRA
                </button>
              </form>
            </div>

            <div className="col-sm-4 p-3">
              <div className="card card-body">
                <p className="mb-1">Total de Itens</p>
                <h3 className=" mb-3 txt-right">{itemCount}</h3>
                <hr className="my-4" />
                <p className="mb-1">Total a pagar</p>
                <h2 className="m-0 txt-right">{formatNumber(total)}</h2>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Checkout;
