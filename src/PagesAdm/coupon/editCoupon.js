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

const EditCoupon = (props) => {
  let auxCoupon = {
    codigoCupom: "LES..",
    valor: 0,
    tipoCupom: "",
    status: "Ativo",
    dataValidade: "",
  };

  if (props.location.state !== undefined) {
    auxCoupon = props.location.state.coupon;
  }

  const [coupon, setCoupon] = useState(auxCoupon);

  const { handleChangeEntity, handleSubmit, handleGoBack } = useHandle();

  return (
    <Layout title="Editar coupon" description="Pagina de edição do coupon">
      <Form onSubmit={(e) => handleSubmit(e, coupon, "cupom", "coupon")}>
        <h3 className="mt-2 mb-2 text-center">Cupom : {coupon.id}</h3>
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Text>Codigo do Cupom</InputGroup.Text>
            <FormControl
              name="codigoCupom"
              aria-label="Default"
              defaultValue={coupon.codigoCupom}
              onChange={(e) => handleChangeEntity(e, coupon, setCoupon)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Valor</InputGroup.Text>
            <FormControl
              className="mr-1"
              placeholder="valor"
              aria-label="valor"
              name="valor"
              defaultValue={coupon.valor || ""}
              onChange={(e) => handleChangeEntity(e, coupon, setCoupon)}
            />

            <InputGroup.Text>Validade</InputGroup.Text>
            <FormControl
              placeholder="data Validade"
              type="date"
              aria-label="dataValidade"
              name="dataValidade"
              defaultValue={coupon.dataValidade || ""}
              onChange={(e) => handleChangeEntity(e, coupon, setCoupon)}
            />
          </InputGroup>
        </div>

        <Form.Group controlId="tipoCupomSelect" className="mb-3">
          <Form.Label>Tipo de Cupom</Form.Label>
          <Form.Control
            as="select"
            defaultValue={coupon.tipoCupom}
            onChange={(e) => handleChangeEntity(e, coupon, setCoupon)}
            name="tipoCupom"
          >
            <option value="Desconto">Desconto</option>
            <option value="Troca">Troca</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicSelect" className="mb-3">
          <Form.Label>Status</Form.Label>
          <Form.Control
            as="select"
            defaultValue={coupon.status}
            onChange={(e) => handleChangeEntity(e, coupon, setCoupon)}
            name="status"
          >
            <option value="Ativo">Ativo</option>
            <option value="Desativado">Desativado</option>
          </Form.Control>
        </Form.Group>

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

export default EditCoupon;
