import React from "react";

import LinkerPageHeader from "../../components/LinkerPageHeader";
// import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// import Chart from "chart.js";

import "./styles.css";

const afterinit = () => {
  let ctx = document.getElementsByClassName("mychart");

  console.log(ctx);

  //   let myChart = new Chart(ctx, {
  //     type: "bar",
  //     data: {
  //       labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //       datasets: [
  //         {
  //           label: "# of Votes",
  //           data: [12, 19, 3, 5, 2, 3],
  //           backgroundColor: [
  //             "rgba(255, 99, 132, 0.2)",
  //             "rgba(54, 162, 235, 0.2)",
  //             "rgba(255, 206, 86, 0.2)",
  //             "rgba(75, 192, 192, 0.2)",
  //             "rgba(153, 102, 255, 0.2)",
  //             "rgba(255, 159, 64, 0.2)",
  //           ],
  //           borderColor: [
  //             "rgba(255, 99, 132, 1)",
  //             "rgba(54, 162, 235, 1)",
  //             "rgba(255, 206, 86, 1)",
  //             "rgba(75, 192, 192, 1)",
  //             "rgba(153, 102, 255, 1)",
  //             "rgba(255, 159, 64, 1)",
  //           ],
  //           borderWidth: 1,
  //         },
  //       ],
  //     },
  //     options: {
  //       scales: {
  //         yAxes: [
  //           {
  //             ticks: {
  //               beginAtZero: true,
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   });
  // };
};
function Dashboards() {
  afterinit();
  return (
    <div id="Dashboards">
      <LinkerPageHeader
        name="Senhor Barriga"
        to="/home"
        type="return"
      ></LinkerPageHeader>

      <div>
        <span className="1"></span>
        <span className="2"></span>

        <span className="3"></span>
      </div>

      {/* <div className="dashboards-container">
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
     */}
    </div>
  );
}

export default Dashboards;
