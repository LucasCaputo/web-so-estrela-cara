import React from "react";
import { Link } from "react-router-dom";

import Card from "../../components/Card";
import BubbleChart from "../../components/BubbleChart";

import LinkerPageHeader from "../../components/LinkerPageHeader";
import { Paper, Grid, Box } from "@material-ui/core";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import BarChartIcon from "@material-ui/icons/BarChart";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TableChartIcon from "@material-ui/icons/TableChart";
import HistoryIcon from "@material-ui/icons/History";

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
        <Box width="90%" paddingBottom="3.2rem">
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
            <Link to="/extrato" className="button">
              Gerenciar Lançamentos
            </Link>

            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Link to={"/tempo-vida"}>
                  <Paper className="secondary-cards lifetime">
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      className="icon"
                    >
                      <HistoryIcon></HistoryIcon>
                    </Box>

                    <Box display="flex" flexDirection="column">
                      <b className="hint">Criar Cenário</b>
                    </Box>
                  </Paper>
                </Link>
              </Grid>

              <Grid item xs={6}>
                <Link to={"/caixa"}>
                  <Paper className="secondary-cards cash">
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      className="icon"
                    >
                      <TrendingUpIcon></TrendingUpIcon>
                    </Box>

                    <Box display="flex" flexDirection="column" textAlign="end">
                      <b className="hint white">Variação do Capital de Giro</b>
                    </Box>
                  </Paper>
                </Link>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Link to={"/resultados"}>
                  <Paper className="secondary-cards results">
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      className="icon"
                    >
                      <BarChartIcon></BarChartIcon>
                    </Box>

                    <Box display="flex" flexDirection="column">
                      <b className="hint">Fluxo Resultado</b>
                    </Box>
                  </Paper>
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link to={"/import"}>
                  <Paper className="secondary-cards import">
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      className="icon"
                    >
                      <TableChartIcon></TableChartIcon>
                    </Box>

                    <b className="hint">Importação Excel</b>
                  </Paper>
                </Link>
              </Grid>
            </Grid>
          </section>

          <section className="dashboards-recommendation">
            <h2 className="dashboards-title">Recomendações</h2>

            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper className="primary-cards purple">
                  <p className="description purple">
                    Cursos de gestão gratuitos disponibilizados pela Sebrae
                  </p>

                  <Box justifyContent="flex-end" display="flex">
                    <span>Saiba mais</span>
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className="primary-cards blue">
                  <p className="description blue">
                    Programa de aceleração abre vagas neste mês
                  </p>

                  <Box justifyContent="flex-end" display="flex">
                    <span>Saiba mais</span>
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
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

export default Dashboards;
