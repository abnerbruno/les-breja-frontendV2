import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

const BrunoTeste = () => {
  const [cervejas, setCervejas] = useState([]);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    fetch("api/cervejas")
      .then((response) => response.json())
      .then((data) => setCervejas(data));
  }, []);

  return (
    <Layout title="Testes Aleatorios" description="This is the Teste page">
      {cervejas.map((product) => (
        <>
          <p>{product.id}</p>
          <p>{product.nome}</p>
          <p>{product.quantidade}</p>
          <p>{product.valorDeVenda}</p>
          <p>{product.margemDeLucro}</p>
          <p>{product.nome}</p>
        </>
      ))}
    </Layout>
  );
};

export default BrunoTeste;
