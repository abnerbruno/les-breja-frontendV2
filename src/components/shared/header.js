import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { CartIcon } from "../icons";
import { formatNumber } from "../../helpers/utils";
import styles from "./header.module.scss";

const Header = () => {
  const { itemCount, total } = useContext(CartContext);

  return (
    <header className={styles.header}>
      <Link to="/">Home</Link>
      <Link to="/">Produtos</Link>
      <Link to="/devolution">Troca</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/cart">
        <CartIcon /> Cart[Itens: {itemCount} - {formatNumber(total)}]
      </Link>
      <Link to="/account">Conta</Link>
      <Link to="/register">Cadastro</Link>
    </header>
  );
};

export default Header;
