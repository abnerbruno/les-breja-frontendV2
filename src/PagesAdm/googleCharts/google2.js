import React, { useState, useEffect } from "react";
import LayoutAdm from "../../components/LayoutAdm";
import { Chart } from "react-google-charts";

function GoogleChartsOriginal() {
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

  const ordersList = [
    [
      { type: "date", label: "Date" },
      "Pilsen",
      "Lager",
      "IPA",
      "Porter",
      "Weizenbier",
      "Stout",
    ],
    [new Date(2021, 0), 5, 5, 1, 2, 3, 4],
    [new Date(2021, 1), 4, 8, 1, 4, 5, 14],
    [new Date(2021, 2), 5, 12, 4, 9, 7, 34],
    [new Date(2021, 3), 9, 15, 3, 7, 5, 8],
    [new Date(2021, 4), 3, 18, 3, 7, 4, 9],
    [new Date(2021, 5), 9, 20, 3, 5, 5, 40],
    [new Date(2022, 6), 10, 19, 6, 4, 7, 24],
    [new Date(2022, 7), 10, 15, 8, 3, 2, 14],
    [new Date(2022, 8), 7, 13, 9, 8, 1, 44],
    [new Date(2022, 9), 4, 9, 6, 3, 7, 34],
    [new Date(2022, 10), 1, 6, 9, 8, 9, 24],
    [new Date(2022, 11), 2, 5, 2, 7, 2, 14],
  ];

  const options = {
    title: "Vendas por Categoria",
    curveType: "function",
    legend: { position: "bottom" },
  };

  return (
    <LayoutAdm title={"Dashboard Vendas"}>
      <Chart
        chartType="LineChart"
        width="100%"
        height="500px"
        data={ordersList}
        options={options}
        chartPackages={["corechart", "controls"]}
        controls={[
          {
            controlType: "DateRangeFilter",
            options: {
              filterColumnLabel: "Date",
              ui: { format: { pattern: "MM/yyyy" } },
            },
          },
        ]}
      />
    </LayoutAdm>
  );
}

export default GoogleChartsOriginal;
