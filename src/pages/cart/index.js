import React, { useState } from "react";
import { Link } from "react-router-dom";

import CartProducts from "./CartProducts";
import Layout from "../../components/Layout";
import { useCart } from "../../hooks/useCart";
import { formatNumber } from "../../helpers/utils";

const Cart = () => {
  let { total, cartItems, itemCount, clearCart, discount, discountRequest } =
    useCart();

  const [openDiscount, setDiscount] = useState(false);
  const [inputDiscount, setinputDiscount] = useState([]);

  if (discount === undefined) {
    window.location.reload();
  }

  return (
    <Layout title="Carrinho" description="Suas Melhores Cervejas">
      <div>
        <div className="text-center mt-5">
          <h1>Carrinho</h1>
          <p>Suas Melhores Cervejas.</p>
        </div>

        <div className="row no-gutters justify-content-center">
          <div className="col-md-8 p-1">
            {cartItems.length > 0 ? (
              <CartProducts />
            ) : (
              <div className="p-3 text-center text-muted">
                Seu Carrinho esta Vazio
              </div>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="col-md-4 p-3">
              <div className="card card-body mb-3">
                <h5 className=" mb-3 text-center">Area Cupom</h5>
                <hr className="my-4" />
                {openDiscount && (
                  <>
                    <p className="mb-1">Cupom {discount.tipoCupom || ""}</p>
                    <h3 className="m-0 text-danger txt-right mb-3">
                      {isNaN(discount.valor)
                        ? formatNumber(0)
                        : formatNumber(discount.valor)}
                    </h3>
                  </>
                )}
                <form className="card p-2">
                  <div className="input-group">
                    <input
                      type="text"
                      name="discount"
                      id="discountInput"
                      className="form-control"
                      placeholder="Cod Cupom"
                      onChange={(e) => setinputDiscount(e.target.value)}
                    />
                    <div className="input-group-append">
                      <button
                        id="resgatar"
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          discountRequest(inputDiscount);
                          setDiscount(true);
                        }}
                      >
                        Resgatar
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="card card-body">
                <p className="mb-1">Total de Itens</p>
                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                <p className="mb-1">Total a pagar</p>
                <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
                <hr className="my-4" />
                <div className="text-center">
                  <Link to="/checkout">
                    <button
                      id="checkout"
                      type="button"
                      className="btn btn-primary mb-2"
                    >
                      CHECKOUT
                    </button>
                  </Link>
                  <button
                    id="limpar"
                    type="button"
                    className="btn text-danger mb-2"
                    onClick={clearCart}
                  >
                    LIMPAR
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
