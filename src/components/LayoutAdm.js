import React from "react";
import Header from "./shared/header";
import Footer from "./shared/footer";

import { Helmet } from "react-helmet-async";

import "bootswatch/dist/lux/bootstrap.css";
import Navbar from "./SharedAdm/Navbar";

const LayoutAdm = ({
  title,
  description,
  children,
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
      <Footer />
    </>
  );
};

export default LayoutAdm;
