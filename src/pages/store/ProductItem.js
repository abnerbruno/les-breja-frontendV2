import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../../hooks/useCart";
import { formatNumber } from "../../helpers/utils";

const ProductItem = ({ product }) => {
  const { addProduct, cartItems, increase } = useCart();

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <div className="card card-body">
      <img
        style={{ display: "block", margin: "0 auto 10px", maxHeight: "200px" }}
        className="img-fluid"
        src={product.photo + "?v=" + product.id}
        alt=""
      />
      <p>{product.nome}</p>
      <h3 className="text-left">{formatNumber(product.valorDeVenda)}</h3>
      <div className="text-right">
        <Link
          id="detail"
          className="btn btn-link btn-sm mr-2"
          to={{
            pathname: "/detail",
            state: { product: product },
          }}
        >
          Detalhes
        </Link>

        {isInCart(product) && (
          <button
            id="increase"
            onClick={() => increase(product)}
            className="btn btn-outline-primary btn-sm"
          >
            Adicionar
          </button>
        )}

        {!isInCart(product) && (
          <button
            id="addProduct"
            onClick={() => addProduct(product)}
            className="btn btn-primary btn-sm"
          >
            Carrinho
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
