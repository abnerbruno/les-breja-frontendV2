import React from "react";
import Layout from "../../components/Layout";

const Devolution = () => {
  return (
    <Layout title="Troca" description="This is the About Troca de Produto">
      <form method="post">
        <h3 className="mt-5">Solicitação de Devolução</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="txtName"
                className="form-control"
                placeholder="Seu Nome"
                value=""
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="txtEmail"
                className="form-control"
                placeholder="Seu Email"
                value=""
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="txtPhone"
                className="form-control"
                placeholder="Numero do Pedido"
                value=""
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <textarea
                name="txtMsg"
                className="form-control"
                placeholder="Motivo da devolução"
                style={{ width: "100%", height: "175px" }}
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Devolution;
