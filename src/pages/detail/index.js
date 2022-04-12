import React from "react";
import Layout from "../../components/Layout";
import { formatNumber } from "../../helpers/utils";
import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";

const Detail = (props) => {
  const { addProduct, cartItems, increase } = useCart();

  const { product } = props.location.state;

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };
  return (
    <Layout
      title="Detalhes do Produto"
      description="Pagina de descrição do Produtos"
    >
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{product.nome}</h3>
          <h6 className="card-subtitle">globe type beer for the Bests</h6>
          <div className="row mt-2">
            <div className="col-lg-5 col-md-5 col-sm-6">
              <div className="white-box text-center">
                <img
                  className="img-responsive"
                  style={{
                    display: "block",
                    margin: "0 auto 10px",
                    Height: "600px",
                    width: "430px",
                  }}
                  src={product.photo + "?v=" + product.id}
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-7 col-sm-6">
              <h4 className="box-title mt-5">Descrição da Cerveja</h4>
              <p>{product.descricao}</p>

              <h2 className="mt-5">
                {formatNumber(product.valorDeVenda)}
                <small className="text-success">(36%off)</small>
              </h2>

              {isInCart(product) && (
                <button
                  onClick={() => increase(product)}
                  className="btn btn-outline-primary btn-sm mr-1"
                >
                  Adicionar
                </button>
              )}

              {!isInCart(product) && (
                <button
                  onClick={() => addProduct(product)}
                  className="btn btn-outline-primary btn-sm mr-1"
                >
                  Carrinho
                </button>
              )}

              {!isInCart(product) && (
                <Link to="/cart">
                  <button
                    onClick={() => addProduct(product)}
                    className="btn btn-primary btn-sm mr-1"
                  >
                    Comprar
                  </button>
                </Link>
              )}

              {isInCart(product) && (
                <Link to="/cart">
                  <button className="btn btn-primary btn-sm mr-1">
                    Comprar
                  </button>
                </Link>
              )}

              <h3 className="box-title mt-5">Fornecedor</h3>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-check text-success"></i>
                  {product.nomeFornecedor}
                </li>
                <li>
                  <i className="fa fa-check text-success"></i>Designed to foster
                  easy portability
                </li>
                <li>
                  <i className="fa fa-check text-success"></i>Perfect furniture
                  to flaunt your wonderful collectibles
                </li>
              </ul>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h3 className="box-title mt-5">Informação Geral</h3>
              <div className="table-responsive">
                <table className="table table-striped table-product">
                  <tbody>
                    <tr>
                      <td width="390">Categorias</td>
                      {product.categorias.map((categoria, index) => (
                        <td key={index}>{categoria.nome}</td>
                      ))}
                    </tr>
                    <tr>
                      <td>Delivery Condition</td>
                      <td>Knock Down</td>
                    </tr>
                    <tr>
                      <td>Seat Lock Included</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Type</td>
                      <td>Office Chair</td>
                    </tr>
                    <tr>
                      <td>Style</td>
                      <td>Contemporary&amp;Modern</td>
                    </tr>
                    <tr>
                      <td>Wheels Included</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Upholstery Included</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Upholstery Type</td>
                      <td>Cushion</td>
                    </tr>
                    <tr>
                      <td>Head Support</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Suitable For</td>
                      <td>Study&amp;Home Office</td>
                    </tr>
                    <tr>
                      <td>Adjustable Height</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Model Number</td>
                      <td>F01020701-00HT744A06</td>
                    </tr>
                    <tr>
                      <td>Armrest Included</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Care Instructions</td>
                      <td>
                        Handle With Care,Keep In Dry Place,Do Not Apply Any
                        Chemical For Cleaning.
                      </td>
                    </tr>
                    <tr>
                      <td>Finish Type</td>
                      <td>Matte</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
