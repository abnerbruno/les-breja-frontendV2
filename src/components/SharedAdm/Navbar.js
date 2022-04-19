import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/client">Clientes</Link>
      <Link to="/product">Produtos</Link>
      <Link to="/order">Pedidos</Link>
      <Link to="/cupom">Cupom</Link>
      <Link to="/envio">Envio</Link>
      <Link to="/troca">Troca</Link>
      <Link to="/usuario">Usuario</Link>
    </div>
  );
};

export default Navbar;
