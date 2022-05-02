import React from "react";
import {
  Button,
  ButtonGroup,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { PlusCircleIcon, TrashIcon } from "../../components/icons";

const FormaPagamento = ({
  index,
  formaPagamento,
  pagamento,
  setPagamento,
  openData,
  setOpenData,
}) => {
  const emptyItem = {
    valor: 0,
    nomeNoCartao: "",
    numeroCartao: "",
    validade: "",
    tipoConta: "Poupanca",
    codigoSeguranca: "",
    bandeira: "Master Card",
  };

  const addItem = () => {
    pagamento.formasPagamento.push(emptyItem);
    setPagamento(pagamento);
    setOpenData(!openData);
  };

  const editItem = (event) => {
    event.preventDefault();
    pagamento.formasPagamento[index][event.target.name] = event.target.value;
    console.log(
      "Valor Cuzao" + pagamento.formasPagamento[index][event.target.name]
    );
    setPagamento(pagamento);
  };

  const deleteItem = () => {
    pagamento.formasPagamento.splice(index, 1);
    setPagamento(pagamento);
    setOpenData(!openData);
  };

  return (
    <div>
      <Row>
        <Form.Group className="col-md-6 mb-3">
          <Form.Label>Nome no Cartão</Form.Label>
          <FormControl
            aria-label="NomeNoCartao"
            name="nomeNoCartao"
            defaultValue={formaPagamento.nomeNoCartao}
            onChange={(e) => editItem(e)}
          />
        </Form.Group>

        <Form.Group className="col-md-6 mb-3">
          <Form.Label>Numero Cartao</Form.Label>
          <FormControl
            className="mr-1"
            aria-label="numeroCartao"
            name="numeroCartao"
            defaultValue={formaPagamento.numeroCartao}
            onChange={(e) => editItem(e)}
          />
        </Form.Group>

        <Form.Group className="col-md-3 mb-3">
          <Form.Label>Validade</Form.Label>
          <FormControl
            type="date"
            aria-label="Validade"
            name="validade"
            defaultValue={formaPagamento.validade}
            onChange={(e) => editItem(e)}
          />
        </Form.Group>

        <Form.Group className="col-md-3 mb-3">
          <Form.Label>Cod. Seguranca</Form.Label>
          <FormControl
            className="mr-1"
            aria-label="codigoSeguranca"
            name="codigoSeguranca"
            onChange={(e) => editItem(e)}
          />
        </Form.Group>

        <Form.Group className="col-md-3 mb-3">
          <Form.Label>Tipo Conta</Form.Label>
          <FormControl
            as="select"
            name="tipoConta"
            defaultValue={formaPagamento.tipoConta}
            onChange={(e) => editItem(e)}
          >
            <option value="Conta Poupança">Poupança</option>
            <option value="Conta Corrente">Corrente</option>
          </FormControl>
        </Form.Group>

        <Form.Group className="col-md-3 mb-3">
          <Form.Label>Bandeira</Form.Label>
          <FormControl
            as="select"
            name="bandeira"
            onChange={(e) => editItem(e)}
            defaultValue={formaPagamento.bandeira}
          >
            <option value="Master Card">Master Card</option>
            <option value="Visa">Visa</option>
          </FormControl>
        </Form.Group>

        <InputGroup className="col-md-6 mb-3">
          <InputGroup.Text>R$</InputGroup.Text>
          <FormControl
            name="valor"
            defaultValue={formaPagamento.valor}
            onChange={(e) => editItem(e)}
          />
        </InputGroup>

        <ButtonGroup className="col-md-3">
          <Button
            size="sm"
            className="btn btn-primary float-right mb-3"
            onClick={() => addItem()}
          >
            <PlusCircleIcon width={"15px"} />
          </Button>
          <Button
            size="sm"
            className="btn btn-danger float-right mb-3"
            onClick={() => deleteItem()}
          >
            <TrashIcon width={"15px"} />
          </Button>
        </ButtonGroup>
      </Row>

      <hr className="mb-4" />
    </div>
  );
};

export default FormaPagamento;
