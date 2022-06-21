import React, { useState } from "react";
import {
  Button,
  Collapse,
  Form,
  FormControl,
  FormGroup,
  InputGroup,
} from "react-bootstrap";
import Layout from "../../components/Layout";
import { useHandle } from "../../hooks/useHandle";
import Address from "./address";
import Card from "./card";

const EditClient = (props) => {
  let auxClient = {
    nomeCompleto: "",
    cpf: "",
    classificacao: "Rank B",
    email: "",
    senha: "",
    telefone: "",
    dataNascimento: "",
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
        descricao: "Endereco de Envio",
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
        pais: "Brasil",
        descricao: "Endereco de Cobrança",
      },
    ],

    cartoes: [
      {
        nomeNoCartao: "",
        numeroCartao: "",
        tipoConta: "",
        codigoSeguranca: "",
        validade: new Date(),
        bandeira: "",
        descricao: "cartao Principal",
      },
      {
        nomeNoCartao: "",
        numeroCartao: "",
        tipoConta: "",
        codigoSeguranca: "",
        bandeira: "",
        validade: new Date(),
        descricao: "cartao Secundario",
      },
    ],
  };

  if (props.location.state !== undefined) {
    auxClient = props.location.state.client;
  }

  const [client, setClient] = useState(auxClient);

  const { handleChangeEntity, handleSubmit, handleGoBack } = useHandle();

  const [openData, setOpenData] = useState(false);
  const [openAddress, setOpenAddress] = useState(false);
  const [openCard, setOpenCard] = useState(false);

  return (
    <Layout title="Editar client" description="Pagina de edição do client">
      <Form onSubmit={(e) => handleSubmit(e, client, "cliente", "client")}>
        <h3 className="mt-2 mb-2 text-center">{client.nomeCompleto}</h3>

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
              <Form.Control
                id="nomeCompleto"
                name="nomeCompleto"
                aria-label="Default"
                placeholder="Bruno Abner..."
                defaultValue={client.nomeCompleto}
                onChange={(e) => handleChangeEntity(e, client, setClient)}
                maxLength={50}
                required
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Email</InputGroup.Text>
              <FormControl
                id="email"
                name="email"
                type="text"
                aria-label="email"
                placeholder="...@host.com.br"
                defaultValue={client.email || ""}
                onChange={(e) => handleChangeEntity(e, client, setClient)}
                required
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Senha</InputGroup.Text>
              <FormControl
                id="senha"
                className="mr-1"
                placeholder="Senha"
                aria-label="Senha"
                name="senha"
                defaultValue={client.senha || ""}
                onChange={(e) => handleChangeEntity(e, client, setClient)}
                required
              />

              <FormControl
                id="repetirSenha"
                placeholder="Repetir Senha"
                aria-label="RepetirSenha"
                name="senha"
                defaultValue={client.senha || ""}
                onChange={(e) => handleChangeEntity(e, client, setClient)}
                required
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Telefone</InputGroup.Text>
              <FormControl
                id="telefone"
                className="mr-1"
                placeholder="(11) 1234-5678"
                aria-label="Telefone"
                name="telefone"
                defaultValue={client.telefone || ""}
                onChange={(e) => handleChangeEntity(e, client, setClient)}
                required
              />

              <InputGroup.Text>Data Nascimento</InputGroup.Text>
              <FormControl
                id="dataNascimento"
                className="mr-1"
                placeholder="Data Nascimento"
                aria-label="DataNascimento"
                name="dataNascimento"
                type="Date"
                defaultValue={
                  client.id !== undefined
                    ? new Date(client.dataNascimento)
                        .toISOString()
                        .split("T")[0]
                    : new Date()
                }
                onChange={(e) => handleChangeEntity(e, client, setClient)}
                required
              />

              <InputGroup.Text>CPF</InputGroup.Text>
              <FormControl
                id="cpf"
                placeholder="CPF"
                aria-label="CPF"
                name="cpf"
                defaultValue={client.cpf || ""}
                onChange={(e) => handleChangeEntity(e, client, setClient)}
                required
              />
            </InputGroup>

            <Form.Group controlId="formBasicSelect" className="mb-3">
              <Form.Label>Classificação</Form.Label>
              <Form.Control
                id="classificacao"
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
                id="genero"
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
            {client.enderecos.map((address, index) => (
              <Address
                key={index}
                index={index}
                address={address}
                client={client}
                setClient={setClient}
                openData={openAddress}
                setOpenData={setOpenAddress}
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
            {client.cartoes.map((card, index) => (
              <Card
                key={index}
                index={index}
                card={card}
                client={client}
                setClient={setClient}
                openData={openCard}
                setOpenData={setOpenCard}
              />
            ))}
          </div>
        </Collapse>

        <FormGroup className="col-md-12 text-center">
          <Button id="salvar" type="submit" className="mr-1 btn-success">
            Salvar
          </Button>
          <Button
            id="cancelar"
            onClick={handleGoBack}
            className="mr-1 btn-danger"
          >
            Cancelar
          </Button>
        </FormGroup>
      </Form>
    </Layout>
  );
};

export default EditClient;
