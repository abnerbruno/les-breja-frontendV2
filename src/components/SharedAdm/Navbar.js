import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link id="client" to="/client">
        Clientes
      </Link>
      <Link id="product" to="/product">
        Produtos
      </Link>
      <Link id="order" to="/order">
        Pedidos
      </Link>
      <Link id="coupon" to="/coupon">
        Cupom
      </Link>
      <Link id="devolution" to="/devolution">
        Troca
      </Link>
      <Link id="user" to="/user">
        Usuario
      </Link>
      <Link id="dashboard" to="/dashboard1">
        Dashboard
      </Link>
    </div>
  );
};

export default Navbar;
