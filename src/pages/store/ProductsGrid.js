import React, { useState } from "react";

import ProductItem from "./ProductItem";
import styles from "./ProductsGrid.module.scss";
import { useProducts } from "../../hooks/useProducts";

const ProductsGrid = () => {
  const { products } = useProducts();

  const [query, setQuery] = useState("");

  return (
    <div className={styles.p__container}>
      <div className="row">
        <div className="col-sm-8">
          <div className="py-3">{products.length} Produtos</div>
        </div>
        <div className="col-sm-4">
          <div className="form-group">
            <input
              type="text"
              name=""
              placeholder="Search product"
              className="form-control"
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.p__grid}>
        {products
          .filter((product) => {
            if (query === "") {
              return product;
            } else if (
              product.nome.toLowerCase().includes(query.toLowerCase())
            ) {
              return product;
            }
          })
          .map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
      <div className={styles.p__footer}></div>
    </div>
  );
};

export default ProductsGrid;
