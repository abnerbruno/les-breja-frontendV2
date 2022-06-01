import React, { useEffect, useState } from "react";
import {
  Button,
  Collapse,
  Form,
  FormControl,
  FormGroup,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { useHandle } from "../../hooks/useHandle";
import Address from "../../PagesAdm/client/address";
import Card from "../../PagesAdm/client/card";

const Register = () => {
  let auxClient = {
    nomeCompleto: "",
    cpf: "",
    classificacao: "Rank B",
    email: "",
    senha: "",
    telefone: "",
    dataNascimento: "02-08-1999",
    genero: "",
    status: "Ativo",

    enderecos: [
      {
        longadouro: "",
        tipoLongadouro: "",
        tipoResidencia: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: "",
        cep: "",
        pais: "Brasil",
        descricao: "Endereco 01",
      },
      {
        longadouro: "",
        tipoLongadouro: "",
        tipoResidencia: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: "",
        cep: "",
        pais: "",
        descricao: "",
      },
    ],

    cartoes: [
      {
        nomeNoCartao: "",
        numeroCartao: "",
        tipoConta: "",
        codigoSeguranca: "",
        bandeira: "",
        descricao: "cartao Principal",
      },
      {
        nomeNoCartao: "",
        numeroCartao: "",
        tipoConta: "",
        codigoSeguranca: "",
        bandeira: "",
        descricao: "cartao Secundario",
      },
    ],
  };

  const [client, setClient] = useState([]);
  const [listaEnderecos, setListaEndereco] = useState([]);
  const [listaCartoes, setListaCartoes] = useState([]);

  const { handleChangeEntity, handleSubmit, handleGoBack } = useHandle();

  const [openData, setOpenData] = useState(true);
  const [openAddress, setOpenAddress] = useState(false);
  const [openCard, setOpenCard] = useState(false);

  const [openConfirmRequest, setOpenConfirmRequest] = useState(false);

  useEffect(() => {
    setClient(auxClient);
    setListaEndereco(auxClient.enderecos);
    setListaCartoes(auxClient.cartoes);
  }, []);

  return (
    <Layout
      title="Cadastrar Cliente"
      description="Pagina de cadastro do Cliente"
    >
      {openConfirmRequest && (
        <div className="row no-gutters justify-content-center">
          <div className="p-3 text-center">
            <h2 className="text-success">Cadastro Realizado</h2>
            <Link to="/" className="btn btn-outline-success btn-sm">
              Ir as compras
            </Link>
          </div>
        </div>
      )}

      {!openConfirmRequest && (
        <div>
          <div className="text-center mt-5">
            <h1>Cadastro</h1>
            <p>Suas Melhores Cervejas estão aqui !!</p>
          </div>
          <Form
            onSubmit={(e) => {
              handleSubmit(e, client, "cliente", "register");
              setOpenConfirmRequest(true);
            }}
          >
            <Button
              className="btn btn-primary btn-md btn-block mb-3"
              onClick={() => setOpenData(!openData)}
              aria-controls="dadosPessoais"
              aria-expanded={openData}
            >
              Dados Pessoais
            </Button>
            <Collapse in={openData}>
              <div>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Nome</InputGroup.Text>
                  <FormControl
                    name="nomeCompleto"
                    aria-label="Default"
                    defaultValue={client.nomeCompleto}
                    onChange={(e) => handleChangeEntity(e, client, setClient)}
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text>Email</InputGroup.Text>
                  <FormControl
                    name="email"
                    type="text"
                    aria-label="email"
                    defaultValue={client.email || ""}
                    onChange={(e) => handleChangeEntity(e, client, setClient)}
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text>Senha</InputGroup.Text>
                  <FormControl
                    className="mr-1"
                    placeholder="Senha"
                    aria-label="Senha"
                    name="senha"
                    defaultValue={client.senha || ""}
                    onChange={(e) => handleChangeEntity(e, client, setClient)}
                  />

                  <FormControl
                    placeholder="Repetir Senha"
                    aria-label="RepetirSenha"
                    name="senha"
                    defaultValue={client.senha || ""}
                    onChange={(e) => handleChangeEntity(e, client, setClient)}
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text>Telefone</InputGroup.Text>
                  <FormControl
                    className="mr-1"
                    placeholder="Telefone (XX) XXXXX-..."
                    aria-label="Telefone"
                    name="telefone"
                    defaultValue={client.telefone || ""}
                    onChange={(e) => handleChangeEntity(e, client, setClient)}
                  />

                  <InputGroup.Text>Data Nascimento</InputGroup.Text>
                  <FormControl
                    className="mr-1"
                    placeholder="Data Nascimento"
                    aria-label="DataNascimento"
                    name="dataNascimento"
                    defaultValue={client.dataNascimento || ""}
                    onChange={(e) => handleChangeEntity(e, client, setClient)}
                  />

                  <InputGroup.Text>CPF</InputGroup.Text>
                  <FormControl
                    placeholder="CPF"
                    aria-label="CPF"
                    name="cpf"
                    defaultValue={client.cpf || ""}
                    onChange={(e) => handleChangeEntity(e, client, setClient)}
                  />
                </InputGroup>

                <Form.Group controlId="formBasicSelect" className="mb-3">
                  <Form.Label>Classificação</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue={client.classificacao}
                    onChange={(e) => handleChangeEntity(e, client, setClient)}
                    name="classificacao"
                    disabled
                  >
                    <option value="B">Rank B</option>
                    <option value="A">Rank A</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicSelect" className="mb-3">
                  <Form.Label>Genero</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue={client.genero}
                    onChange={(e) => handleChangeEntity(e, client, setClient)}
                    name="genero"
                  >
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                  </Form.Control>
                </Form.Group>
              </div>
            </Collapse>

            <Button
              className="btn btn-primary btn-md btn-block mb-3"
              onClick={() => setOpenAddress(!openAddress)}
              aria-controls="enderecos"
              aria-expanded={openAddress}
            >
              Endereços
            </Button>
            <Collapse in={openAddress}>
              <div id="enderecos">
                {listaEnderecos.map((address, index) => (
                  <Address
                    key={index}
                    index={index}
                    address={address}
                    client={client}
                    setClient={setClient}
                  />
                ))}
              </div>
            </Collapse>

            <Button
              className="btn btn-primary btn-md btn-block mb-3"
              onClick={() => setOpenCard(!openCard)}
              aria-controls="cartoes"
              aria-expanded={openCard}
            >
              Cartões
            </Button>
            <Collapse in={openCard}>
              <div id="cartoes">
                {listaCartoes.map((card, index) => (
                  <Card
                    key={index}
                    index={index}
                    card={card}
                    client={client}
                    setClient={setClient}
                  />
                ))}
              </div>
            </Collapse>

            <FormGroup className="col-md-12 text-center">
              <Button type="submit" className="mr-1 btn-success">
                Salvar
              </Button>
              <Button onClick={handleGoBack} className="mr-1 btn-danger">
                Cancelar
              </Button>
            </FormGroup>
          </Form>
        </div>
      )}
    </Layout>
  );
};

export default Register;
