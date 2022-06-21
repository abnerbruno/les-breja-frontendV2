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
      <Link id="home" to="/">
        Home
      </Link>
      <Link id="home1" to="/">
        Produtos
      </Link>
      <Link id="requestDevolution" to="/requestDevolution">
        Troca
      </Link>
      <Link id="about" to="/about">
        Sobre
      </Link>
      <Link id="cart" to="/cart">
        <CartIcon /> Cart[Itens: {itemCount} - {formatNumber(total)}]
      </Link>
      <Link id="account" to="/account">
        Conta
      </Link>
      <Link id="register" to="/register">
        Cadastro
      </Link>
      <Link id="adm" to="/adm">
        Adm
      </Link>
    </header>
  );
};

export default Header;
