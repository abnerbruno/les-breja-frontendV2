import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { EditIcon, TrashIcon } from "../../components/icons";
import LayoutAdm from "../../components/LayoutAdm";
import { formatNumber } from "../../helpers/utils";

const CouponList = () => {
  const [coupons, setCoupons] = useState([]);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    fetch("api/cupoms")
      .then((response) => response.json())
      .then((data) => {
        setCoupons(data);
      });
  }, []);

  const remove = (id) => {
    fetch(`/api/cupom/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      const updatedCoupons = coupons.filter((i) => i.id !== id);
      setCoupons(updatedCoupons);
    });
  };

  const couponsList = coupons.map((coupon) => {
    return (
      <tr key={coupon.id}>
        <td className="text-center"> {coupon.id}</td>
        <td className="text-center"> {coupon.codigoCupom}</td>
        <td className="text-center"> {coupon.tipoCupom}</td>
        <td className="text-center"> {formatNumber(coupon.valor)}</td>
        <td className="text-center">
          <span className="rounded badge badge-success m-0">
            {coupon.status}
          </span>
        </td>
        <td className="text-center"> {coupon.dataValidade}</td>
        <td className="text-center"> {coupon.dataCriacao}</td>
        <td className="text-center">
          <ButtonGroup>
            <Button size="sm" className="btn-info mr-1">
              <EditIcon width={"15px"} />
            </Button>
            <Button
              size="sm"
              className="btn-danger"
              onClick={() => remove(coupon.id)}
            >
              <TrashIcon width={"15px"} />
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });

  return (
    <LayoutAdm title={"Lista Cupons"} entityName={"Cupom"}>
      <Table id="lista" className="table table-hover table-sm">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              ID
            </th>
            <th scope="col" className="text-center">
              Codigo Promocional
            </th>
            <th scope="col" className="text-center">
              Tipo
            </th>
            <th scope="col" className="text-center">
              Valor
            </th>
            <th scope="col" className="text-center">
              Status
            </th>
            <th scope="col" className="text-center">
              Validade
            </th>
            <th scope="col" className="text-center">
              Data Cadastro
            </th>
            <th scope="col" className="text-center">
              Ação
            </th>
          </tr>
        </thead>
        <tbody id="tbody">{couponsList}</tbody>
      </Table>
    </LayoutAdm>
  );
};

export default CouponList;
