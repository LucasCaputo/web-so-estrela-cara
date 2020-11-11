import React from "react";

import LinkerPageHeader from "../../components/LinkerPageHeader";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import "./styles.css";

function Dashboards() {
  return (
    <div id="Dashboards">
      <LinkerPageHeader name="Senhor Barriga" to="/home"></LinkerPageHeader>

      <div className="dashboards-container">
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

        <h4>Sua empresa está bem!</h4>
        <h6>Clique para ver os dados completos</h6>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className="secondary-cards">
              <VisibilityOffIcon></VisibilityOffIcon>
              <h4>Gastos</h4>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="secondary-cards">
              <VisibilityOffIcon></VisibilityOffIcon>
              <h4>Gastos</h4>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className="secondary-cards">
              <VisibilityOffIcon></VisibilityOffIcon>
              <h4>Gastos</h4>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="secondary-cards">
              <VisibilityOffIcon></VisibilityOffIcon>
              <h4>Gastos</h4>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className="secondary-cards">
              <VisibilityOffIcon></VisibilityOffIcon>
              <h4>Gastos</h4>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="secondary-cards">
              <VisibilityOffIcon></VisibilityOffIcon>
              <h4>Gastos</h4>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Dashboards;
