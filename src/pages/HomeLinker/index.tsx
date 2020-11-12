import React from "react";
import { Link } from "react-router-dom";

import LinkerPageHeader from "../../components/LinkerPageHeader";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import ReceiptTwoToneIcon from "@material-ui/icons/ReceiptTwoTone";
import LocalHospitalTwoToneIcon from "@material-ui/icons/LocalHospitalTwoTone";

import "./styles.css";

function Home() {
  return (
    <div id="Home">
      <LinkerPageHeader
        name="Senhor Barriga"
        to="/home"
        type="topbar"
      ></LinkerPageHeader>

      <div className="home-container">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className="primary-cards revenue">
              <Box display="flex" justifyContent="flex-end" className="icon">
                <VisibilityOffIcon></VisibilityOffIcon>
              </Box>

              <h4 className="label">
                Saldo <br />
                Disponível
              </h4>
              <h6 className="value">
                <b>R$</b> 10.000,00
              </h6>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="primary-cards extract">
              <Box display="flex" justifyContent="flex-end" className="icon">
                <ReceiptTwoToneIcon></ReceiptTwoToneIcon>
              </Box>

              <h4 className="label">
                Ver <br />
                Extrato
              </h4>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Link to={"/dashboards"}>
              <Paper className="secondary-cards health">
                <Box display="flex" justifyContent="flex-end" className="icon">
                  <LocalHospitalTwoToneIcon></LocalHospitalTwoToneIcon>
                </Box>

                <Box display="flex" flexDirection="column">
                  <b className="hint">Sua empresa está bem!</b>
                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    className="description"
                  >
                    <p>Ver os resultados completos</p>
                  </Box>
                </Box>
              </Paper>
            </Link>
          </Grid>

          <Grid item xs={6}>
            <Paper className="secondary-cards"></Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className="secondary-cards"></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="secondary-cards"></Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className="secondary-cards"></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="secondary-cards"></Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
