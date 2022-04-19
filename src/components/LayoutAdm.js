import React from "react";
import Header from "./shared/header";
import Footer from "./shared/footer";

import { Helmet } from "react-helmet-async";

import "bootswatch/dist/lux/bootstrap.css";
import Navbar from "./SharedAdm/Navbar";

const LayoutAdm = ({ title, description, children, entityName }) => {
  return (
    <>
      <Helmet>
        <title>{title ? title + " Adm - Breja" : "React.js Boilerplate"}</title>
        <meta name="description" content={description || "area do Adm"} />
      </Helmet>
      <Header />
      <Navbar />
      <main className="container">{children}</main>
      <div class="p-5 text-center bg-light">
        <button class="btn btn-primary">Adicionar {entityName}</button>
      </div>
      <Footer />
    </>
  );
};

export default LayoutAdm;
