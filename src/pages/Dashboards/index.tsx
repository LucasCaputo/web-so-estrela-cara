import React from "react";
import { Link } from "react-router-dom";

import Card from "../../components/Card";
import BubbleChart from "../../components/BubbleChart";

import LinkerPageHeader from "../../components/LinkerPageHeader";
import { Paper, Grid, Box } from "@material-ui/core";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// import Chart from "chart.js";

import "./styles.css";

function Dashboards() {
  return (
    <div id="Dashboards">
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
        <Box width="90%">
          <section className="basic-chart">
            <h2 className="dashboards-title">Visão Geral</h2>
            <div className="dashboards-chart-container">
              <BubbleChart
                revenue={2000}
                cost={1000}
                future={1250}
              ></BubbleChart>
            </div>

            <Box
              display="flex"
              flexDirection="column"
              width="100%"
              gridGap="16px"
            >
              <p className="dashboards-title">O gráfico acima representa:</p>
              <Card
                title="Entradas"
                color="green"
                value="2.000,00"
                size="medium"
              ></Card>
              <Card
                title="Saídas"
                color="red"
                value="1.000,00"
                size="medium"
              ></Card>
              <Card
                title="Gastos Futuros"
                color="orange"
                value="1.250,00"
                size="medium"
              ></Card>
            </Box>
          </section>

          <section className="dashboards-container">
            <Link to="/home" className="button">
              Gerenciar Lançamentos
            </Link>

            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper className="primary-cards">
                  <p className="title-cards">Tempo de Vida</p>

                  <p className="life-time">
                    1 mês e <br /> meio
                  </p>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className="primary-cards">
                  <p className="title-cards">Gestão de Caixa</p>
                  <p>Mar</p>
                  <p>Caixa</p>
                  <p>Necessidade de Caixa</p>
                </Paper>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper className="primary-cards">
                  <p className="title-cards">Fluxo Resultado</p>
                  <p>Ver detalhes</p>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className="primary-cards"></Paper>
              </Grid>
            </Grid>
          </section>

          <section className="dashboards-recommendation">
            <h2 className="dashboards-title">Recomendações</h2>

            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper className="primary-cards health">
                  <p className="description">
                    Cursos de gestão gratuitos disponibilizados pela Sebrae
                  </p>

                  <Box justifyContent="flex-end" display="flex">
                    <Link to="/">
                      <span>Saiba mais</span>
                    </Link>
                    <Link to="/">
                      <ArrowForwardIosIcon></ArrowForwardIosIcon>
                    </Link>
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className="primary-cards">
                  <p className="description">
                    Programa de aceleração abre vagas neste mês
                  </p>
                  <Box justifyContent="flex-end" display="flex">
                    <Link to="/">
                      <span>Saiba mais</span>
                    </Link>
                    <Link to="/">
                      <ArrowForwardIosIcon></ArrowForwardIosIcon>
                    </Link>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </section>

          <section className="dashboards-last-releases">
            <h2 className="dashboards-title">Últimos Lançamentos</h2>

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
                title="Compra de Peça para a..."
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

export default Dashboards;
