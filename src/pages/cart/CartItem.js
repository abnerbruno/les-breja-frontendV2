import React from "react";

import { useCart } from "../../hooks/useCart";
import { formatNumber } from "../../helpers/utils";
import {
  PlusCircleIcon,
  MinusCircleIcon,
  TrashIcon,
} from "../../components/icons";

const CartItem = ({ product }) => {
  const { increase, decrease, removeProduct } = useCart();

  const estoque = product.estoqueProduto.quantidadeAtual;

  return (
    <div className="row no-gutters py-2">
      <div className="col-sm-2 p-2">
        <img
          alt={product.name}
          style={{ margin: "0 auto", maxHeight: "50px" }}
          src={product.photo}
          className="img-fluid d-block"
        />
      </div>
      <div className="col-sm-4 p-2">
        <h5 className="mb-1">{product.nome}</h5>
        <p className="text-primary">Estoque : {estoque}</p>
      </div>
      <div className="col-sm-2 p-2 text-center ">
        <p className="mb-0">Qnt: {product.quantity}</p>
        <p className="mb-0">{formatNumber(product.valorDeVenda)}</p>
      </div>
      <div className="col-sm-4 p-2 text-right">
        {product.quantity < estoque && (
          <button
            id="increase"
            onClick={() => increase(product)}
            className="btn btn-primary btn-sm mr-2 mb-1"
          >
            <PlusCircleIcon width={"20px"} />
          </button>
        )}

        {product.quantity > 1 && (
          <button
            id="decrease"
            onClick={() => decrease(product)}
            className="btn btn-danger btn-sm mb-1"
          >
            <MinusCircleIcon width={"20px"} />
          </button>
        )}

        {product.quantity === 1 && (
          <button
            onClick={() => removeProduct(product)}
            className="btn btn-danger btn-sm mb-1"
          >
            <TrashIcon width={"20px"} />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
