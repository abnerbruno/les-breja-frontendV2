import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title="About" description="This is the About page">
      <div className="text-center mt-5">
        <h2>O que é cerveja artesanal?</h2>
        <p className="mb-5">
          As cervejas artesanais são elaboradas por meio de um processo mais
          cuidadoso, com foco em qualidade, utilzando os melhores ingredientes,
          sempre pensando em oferecer uma experiência sensorial única ao seu
          consumidor.
        </p>

        <h2>Quais são os diferenciais adotados para a sua fabricação?</h2>
        <p>
          O processo de produção da cerveja artesanal é mais cuidadoso que o das
          industriais. Os produtores respeitam os períodos de fermentação e
          maturação, além de não utilizer produtos químicos que podem baratear o
          custo e acelerar o processo. Também pode existir uma relação entre os
          produtores e sua comunidade local, que pode fornecer ingredientes
          especiais para a elaboração da bebida.
        </p>
      </div>
    </Layout>
  );
};

export default About;
