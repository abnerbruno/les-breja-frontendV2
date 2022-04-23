import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/client">Clientes</Link>
      <Link to="/product">Produtos</Link>
      <Link to="/order">Pedidos</Link>
      <Link to="/coupon">Cupom</Link>
      <Link to="/shipping">Envio</Link>
      <Link to="/devolution">Troca</Link>
      <Link to="/user">Usuario</Link>
    </div>
  );
};

export default Navbar;
