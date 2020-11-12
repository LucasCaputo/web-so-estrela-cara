import React from "react";
import { Link } from "react-router-dom";

import Card from "../../components/Card";

import LinkerPageHeader from "../../components/LinkerPageHeader";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
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
              <span className="dashboards-chart-revenue"></span>
              <span className="dashboards-chart-cost"></span>
              <span className="dashboards-chart-future"></span>
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
                  <p>Tempo de Vida</p>

                  <p>
                    1 mês <br />e meio
                  </p>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className="primary-cards">
                  <p>Gestão de Caixa</p>
                  <p>Mar</p>
                  <p>Caixa</p>
                  <p>Necessidade de Caixa</p>
                </Paper>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper className="primary-cards">
                  <p>Fluxo Resultado</p>
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
                <Paper className="secondary-cards health">
                  <p>Cursos de gestão gratuitos disponibilizados pela Sebrae</p>

                  <Link to="/">
                    <ArrowBackIosIcon></ArrowBackIosIcon>
                    <span>Saiba mais</span>
                  </Link>
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className="secondary-cards">
                  <p>Programa de aceleração abre vagas neste mês</p>
                  <Link to="/">
                    <ArrowBackIosIcon></ArrowBackIosIcon>
                    <span>Saiba mais</span>
                  </Link>
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
