import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer}  mt-5 p-3`}>
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <a href="/home" className="nav-link px-2 text-muted">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link px-2 text-muted">
            Produtos
          </a>
        </li>
        <li className="nav-item">
          <a href="/Troca" className="nav-link px-2 text-muted">
            Troca
          </a>
        </li>
        <li className="nav-item">
          <a href="/FAQs" className="nav-link px-2 text-muted">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link px-2 text-muted">
            Contato
          </a>
        </li>
      </ul>
      2022 Company, Inc &copy; Breja Store
    </footer>
  );
};

export default Footer;
