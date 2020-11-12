import React from "react";
import { Link } from "react-router-dom";

import Card from "../../components/Card";

import LinkerPageHeader from "../../components/LinkerPageHeader";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

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
              <Card title="Entradas" color="green" value="2.000,00"></Card>
              <Card title="Saídas" color="red" value="1.000,00"></Card>
              <Card
                title="Gastos Futuros"
                color="orange"
                value="1.250,00"
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
                  <VisibilityOffIcon></VisibilityOffIcon>
                  <h4>
                    Saldo <br />
                    Disponível
                  </h4>
                  <h6>
                    <span>R$</span> 10.000,00
                  </h6>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className="primary-cards">
                  <h4>Gastos</h4>
                </Paper>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper className="primary-cards">
                  <VisibilityOffIcon></VisibilityOffIcon>
                  <h4>
                    Saldo <br />
                    Disponível
                  </h4>
                  <h6>
                    <span>R$</span> 10.000,00
                  </h6>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className="primary-cards">
                  <h4>Gastos</h4>
                </Paper>
              </Grid>
            </Grid>
          </section>

          <section className="dashboards-recommendation">
            <h2>Recomendações</h2>

            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Link to={"/dashboards"}>
                  <Paper className="secondary-cards health"></Paper>
                </Link>
              </Grid>

              <Grid item xs={6}>
                <Paper className="secondary-cards"></Paper>
              </Grid>
            </Grid>
          </section>

          <section className="dashboards-last-releases">
            <h2 className="dashboards-title">Últimos Lançamentos</h2>
          </section>
        </Box>
      </Box>
    </div>
  );
}

export default Dashboards;
