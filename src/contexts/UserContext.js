import React, { createContext, useState, useEffect } from "react";
import { dummyUser } from "../services/dummyUser";
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [cliente, setCliente] = useState(dummyUser);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    fetch("api/cliente/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data !== undefined) {
          setCliente(data);
        }
      });
  }, []);

  const handleSelectEnvio = (selectedEnvio, envio) => {
    envio.longadouro = selectedEnvio.longadouro;
    envio.tipoLongadouro = selectedEnvio.tipoLongadouro;
    envio.tipoResidencia = selectedEnvio.tipoResidencia;
    envio.numero = selectedEnvio.numero;
    envio.bairro = selectedEnvio.bairro;
    envio.cidade = selectedEnvio.cidade;
    envio.estado = selectedEnvio.estado;
    envio.cep = selectedEnvio.cep;
    envio.pais = selectedEnvio.pais;

    return envio;
  };

  const auxEnvio = {
    remetente: "",
    longadouro: "",
    tipoLongadouro: "",
    tipoResidencia: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    pais: "",

    frete: 50,
    statusEnvio: "Em Processo de Aprovação",
  };

  const auxPagamento = {
    valorTotal: 0,
    formasPagamento: [
      {
        valor: 0,
        nomeNoCartao: "",
        numeroCartao: "",
        validade: "",
        tipoConta: "",
        codigoSeguranca: "",
        bandeira: "",
      },
    ],
  };

  const contextValues = {
    cliente,
    auxEnvio,
    auxPagamento,
    handleSelectEnvio,
  };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
