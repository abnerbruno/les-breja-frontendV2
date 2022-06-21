import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
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
  }, [coupons]);

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
          {(() => {
            switch (coupon.status) {
              case (coupon.status = "Ativo"):
                return (
                  <span className="rounded badge badge-success m-0">
                    {coupon.status}
                  </span>
                );
              case (coupon.status = "Desativado"):
                return (
                  <span className="rounded badge badge-danger m-0">
                    {coupon.status}
                  </span>
                );
              default:
                return null;
            }
          })()}
        </td>
        <td className="text-center"> {coupon.dataValidade}</td>
        <td className="text-center"> {coupon.dataCriacao}</td>
        <td className="text-center">
          <ButtonGroup>
            <Link
              to={{
                pathname: "/editCoupon",
                state: { coupon: coupon },
              }}
            >
              <Button size="sm" className="btn-info mr-1">
                <EditIcon width={"15px"} />
              </Button>
            </Link>
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
      <div className="p-5 text-center">
        <Link to={"/editCoupon"}>
          <button className="btn btn-primary">Adicionar</button>
        </Link>
      </div>
    </LayoutAdm>
  );
};

export default CouponList;
