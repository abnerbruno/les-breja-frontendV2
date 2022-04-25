import React from "react";
import Header from "./shared/header";
import Footer from "./shared/footer";

import { Helmet } from "react-helmet-async";

import "bootswatch/dist/lux/bootstrap.css";
import Navbar from "./SharedAdm/Navbar";
import { Link } from "react-router-dom";

const LayoutAdm = ({
  title,
  description,
  children,
  entityName,
  editToEntity,
}) => {
  return (
    <>
      <Helmet>
        <title>{title ? title + " Adm - Breja" : "React.js Boilerplate"}</title>
        <meta name="description" content={description || "area do Adm"} />
      </Helmet>
      <Header />
      <Navbar />
      <main className="container">{children}</main>

      <div className="p-5 text-center bg-light">
        <Link to={editToEntity}>
          <button className="btn btn-primary">Adicionar {entityName}</button>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default LayoutAdm;
