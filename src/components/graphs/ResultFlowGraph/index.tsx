import React, { useEffect } from "react";

import { Container } from "./styles";
import { Chart, CommonAxe } from "chart.js";

const ResultFlowGraph = () => {
  const data = {
    labels: ["10", "11", "12", "13", "Ontem", "Hoje"],
    datasets: [
      {
        label: "Saídas",
        // backgroundColor: "#000",
        borderColor: "blue",
        data: [-7000, -1675, -289, 0, 6000, 7875],
        type: "line",
      },
      {
        label: "Entradas",
        backgroundColor: "#4de988",
        borderColor: "#4de988",
        data: [1000, 1545, 565, 287, 6500, 8525],
      },
      {
        label: "Saídas",
        backgroundColor: "#f76263",
        borderColor: "#f76263",
        data: [-8000, -3220, -854, -287, -500, -825],
      },
    ],
  };

  const options = {};

  useEffect(() => {
    new Chart("myChart", {
      type: "bar",
      data: data,
      options,
    });
  }, [data, options]);

  return (
    <Container>
      <canvas id="myChart" width="100%" height="100%"></canvas>
    </Container>
  );
};

export default ResultFlowGraph;
