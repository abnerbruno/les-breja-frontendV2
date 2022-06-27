import React from "react";
import {
  Button,
  ButtonGroup,
  Form,
  FormControl,
  InputGroup,
  Col,
  Row,
} from "react-bootstrap";
import { PlusCircleIcon, TrashIcon } from "../../components/icons";
import { useCliente } from "../../hooks/UseUser";

const FormaPagamento = ({
  index,
  formaPagamento,
  pagamento,
  setPagamento,
  openData,
  setOpenData,
}) => {
  const { cliente } = useCliente();

  const emptyItem = {
    valor: 0,
    nomeNoCartao: "",
    numeroCartao: "",
    validade: new Date(),
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
    setPagamento(pagamento);
  };

  const deleteItem = () => {
    if (pagamento.formasPagamento.length > 1) {
      pagamento.formasPagamento.splice(index, 1);
      setPagamento(pagamento);
    }
    setOpenData(!openData);
  };

  const formatValidade = (formaPagamento) => {
    if (formaPagamento.id !== undefined) {
      return new Date(formaPagamento.validade).toISOString().split("T")[0];
    } else {
      return null;
    }
  };

  return (
    <div>
      <Row>
        <Col md={12} className="mb-3">
          <Form.Label>Selecionar Cartão</Form.Label>
          <Form.Control
            id="selectCard"
            as="select"
            name="cartao"
            onChange={(e) => {
              if (!isNaN(e.target.value)) {
                e.preventDefault();
                const selectCartao = cliente.cartoes[e.target.value];
                selectCartao.id = null;
                pagamento.formasPagamento[index] = selectCartao;
                setPagamento(pagamento);
                setOpenData(!openData);
              }
            }}
          >
            <option>Select..</option>
            {cliente.cartoes.map((cartao, index) => {
              return (
                <option id="optiosCard" key={index} value={index}>
                  {cartao.descricao}
                </option>
              );
            })}
          </Form.Control>
        </Col>

        <Form.Group className="col-md-6 mb-3">
          <Form.Label>Nome Completo</Form.Label>
          <FormControl
            id="nomeNoCartao"
            placeholder="Nome Completo"
            name="nomeNoCartao"
            defaultValue={formaPagamento.nomeNoCartao}
            onChange={(e) => editItem(e)}
            required
          />
        </Form.Group>

        <Form.Group className="col-md-6 mb-3">
          <Form.Label>Numero do Cartão</Form.Label>
          <FormControl
            id="numeroCartao"
            className="mr-1"
            placeholder="Numero do Cartao"
            name="numeroCartao"
            defaultValue={formaPagamento.numeroCartao}
            onChange={(e) => editItem(e)}
            required
          />
        </Form.Group>

        <Form.Group className="col-md-3 mb-3">
          <Form.Label>Validade</Form.Label>
          <FormControl
            id="validade"
            placeholder="Validade"
            aria-label="Validade"
            type="Date"
            name="validade"
            defaultValue={formatValidade(formaPagamento)}
            onChange={(e) => editItem(e)}
            required
          />
        </Form.Group>

        <Form.Group className="col-md-3 mb-3">
          <Form.Label>Cod. Seguranca</Form.Label>
          <FormControl
            id="codigoSeguranca"
            className="mr-1"
            placeholder="Codigo de Seguranca"
            name="codigoSeguranca"
            defaultValue={formaPagamento.codigoSeguranca}
            onChange={(e) => editItem(e)}
            required
          />
        </Form.Group>

        <Form.Group className="col-md-3 mb-3">
          <Form.Label>Tipo Conta</Form.Label>
          <FormControl
            id="tipoConta"
            as="select"
            name="tipoConta"
            defaultValue={formaPagamento.tipoConta || ""}
            onChange={(e) => editItem(e)}
            required
          >
            <option value={formaPagamento.tipoConta}>
              {formaPagamento.tipoConta || "Select..."}
            </option>
            <option value="Corrente">Corrente</option>
            <option value="Poupança">Poupança</option>
          </FormControl>
        </Form.Group>

        <Form.Group className="col-md-3 mb-3">
          <Form.Label>Bandeira</Form.Label>
          <FormControl
            id="bandeira"
            as="select"
            name="bandeira"
            onChange={(e) => editItem(e)}
            defaultValue={formaPagamento.bandeira || ""}
            required
          >
            <option value={formaPagamento.bandeira}>
              {formaPagamento.bandeira || "Select..."}
            </option>
            <option value="Master Card">Master Card</option>
            <option value="Visa">Visa</option>
          </FormControl>
        </Form.Group>

        <InputGroup className="col-md-6 mb-3">
          <InputGroup.Text>R$</InputGroup.Text>
          <FormControl
            id="valor"
            name="valor"
            type="number"
            defaultValue={formaPagamento.valor || ""}
            onChange={(e) => editItem(e)}
            step=".01"
            required
          />
        </InputGroup>

        <ButtonGroup className="col-md-3">
          <Button
            id="addItem"
            size="sm"
            className="btn btn-primary float-right mb-3"
            onClick={() => addItem()}
          >
            <PlusCircleIcon width={"15px"} />
          </Button>
          <Button
            id="deleteItem"
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
