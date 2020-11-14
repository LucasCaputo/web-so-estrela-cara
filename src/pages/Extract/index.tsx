import React from "react";

import Card from "../../components/Card";
import BubbleChart from "../../components/BubbleChart";

import LinkerPageHeader from "../../components/LinkerPageHeader";
import { Box } from "@material-ui/core";

import "./styles.css";

function Extract() {
  return (
    <div id="Extract">
      <LinkerPageHeader
        name="Senhor Barriga"
        to="/home"
        type="return"
      ></LinkerPageHeader>
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        flexDirection="column"
      >
        <Box width="90%" paddingBottom="3.2rem">
          <section className="basic-chart">
            <div className="dashboards-chart-container">
              <BubbleChart
                revenue={2000}
                cost={1000}
                future={1250}
              ></BubbleChart>
            </div>
            {/* <h2 className="extract-title">Adicionar Lançamentos</h2> */}
          </section>

          <section className="dashboards-last-releases">
            <h2 className="extract-title">Últimos Lançamentos</h2>

            <Box
              display="flex"
              flexDirection="column"
              width="100%"
              gridGap="8px"
            >
              <Card
                title="Venda Cliente Clara"
                color="green"
                value="200,00"
                size="small"
              ></Card>
              <Card
                title="Venda Cliente Daniela"
                color="green"
                value="120,00"
                size="small"
              ></Card>
              <Card
                title="Compra Peça Máquina"
                color="red"
                value="100,00"
                size="small"
              ></Card>
              <Card
                title="Venda Cliente Roberta"
                color="green"
                value="20,00"
                size="small"
              ></Card>
              <Card
                title="Compra de Peça"
                color="orange"
                value="50,00"
                size="small"
              ></Card>

              <Card title="Água" color="red" value="100,00" size="small"></Card>
              <Card title="Luz" color="red" value="100,00" size="small"></Card>
            </Box>
          </section>
        </Box>
      </Box>
    </div>
  );
}

export default Extract;
