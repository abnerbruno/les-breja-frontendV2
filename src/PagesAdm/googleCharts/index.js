import React, { useState, useEffect } from "react";
import LayoutAdm from "../../components/LayoutAdm";
import { Chart } from "react-google-charts";

function GoogleCharts() {
  const [orders, setOrders] = useState([]);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    //TODO load google charts
    fetch("api/pedidos")
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  const ordersList = orders.map((order) => {
    const dataVenda = new Date(order.dataCadastro);

    const itemList = order.itemsDoPedido.map((item) => {
      return [item.produto.categorias[0].nome, item.quantidade, dataVenda];
    });

    return itemList[0];
  });

  ordersList.unshift(["categorias", "Vendas", "Date"]);

  console.log("Meu", ordersList);

  return (
    <LayoutAdm title={"Dashboard Vendas"}>
      <Chart
        chartType="Table"
        width="100%"
        height="500px"
        data={ordersList}
        chartPackages={["corechart", "controls"]}
        controls={[
          {
            controlType: "DateRangeFilter",
            options: {
              filterColumnLabel: "Date",
              ui: { format: { pattern: "dd/MM/yyyy" } },
            },
          },
          {
            controlEvents: [
              {
                eventName: "statechange",
                callback: ({ chartWrapper, controlWrapper }) => {
                  console.log("State changed to", controlWrapper?.getState());
                },
              },
            ],
            controlType: "CategoryFilter",
            options: {
              filterColumnIndex: 0,
              ui: {
                labelStacking: "vertical",
                label: "Categorias:",
                allowTyping: false,
                allowMultiple: false,
              },
            },
          },
        ]}
      />
    </LayoutAdm>
  );
}

export default GoogleCharts;
