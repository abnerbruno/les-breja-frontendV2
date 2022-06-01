import React, { useEffect, useState } from "react";
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
    nomeCompleto: "Bruno Abner Silva Santos",
    cpf: "47798740848",
    classificacao: "Rank B",
    email: "brunoabner@gmail.com",
    senha: "12345",
    telefone: "97123-0887",
    dataNascimento: "02-08-1999",
    genero: "Masculino",
    status: "Ativo",

    enderecos: [
      {
        longadouro: "Rua Salvador Rugiero",
        tipoLongadouro: "Residencia",
        tipoResidencia: "Residencia",
        numero: "19",
        bairro: "Vila Maluf",
        cidade: "Suzano",
        estado: "Sao Paulo",
        cep: "08685-060",
        pais: "Brasil",
        descricao: "Endereco 01",
      },
      {
        longadouro: "Rua MarioCovas",
        tipoLongadouro: "Residencia",
        tipoResidencia: "Residencia",
        numero: "24",
        bairro: "Vila Orlanda",
        cidade: "Mogi das Cruzes",
        estado: "Sao Paulo",
        cep: "12345-080",
        pais: "Brasil",
        descricao: "Endereco 02",
      },
    ],

    cartoes: [
      {
        nomeNoCartao: "Bruno Abner",
        numeroCartao: "1234567",
        tipoConta: "Poupanca",
        codigoSeguranca: "1234",
        bandeira: "Visa",
        descricao: "cartao Principal",
      },
      {
        nomeNoCartao: "Bruno Abner",
        numeroCartao: "7654321",
        tipoConta: "Poupanca",
        codigoSeguranca: "4321",
        bandeira: "Master Card",
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
              >
                <option value="A">Rank A</option>
                <option value="B">Rank B</option>
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

            <Form.Group controlId="formBasicSelect" className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                defaultValue={client.status}
                onChange={(e) => handleChangeEntity(e, client, setClient)}
                name="status"
              >
                <option value="Ativo">Ativo</option>
                <option value="Desativado">Desativado</option>
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
    </Layout>
  );
};

export default EditClient;
