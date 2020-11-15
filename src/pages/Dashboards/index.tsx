import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";
import LinkerPageHeader from "../../components/LinkerPageHeader";
import BubbleChart from "../../components/BubbleChart";
import Card from "../../components/Card";

import { Paper, Grid, Box } from "@material-ui/core";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import BarChartIcon from "@material-ui/icons/BarChart";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TableChartIcon from "@material-ui/icons/TableChart";
import HistoryIcon from "@material-ui/icons/History";

// import Chart from "chart.js";

import "./styles.css";
import Select from "../../components/Select";

interface ITransaction {
  id: number;
  name: string;
  value: number;
}

interface IBalance {
  gross_revenue: number;
  id: number;
  percentage_of_taxes: number;
  reference_month: string;
  total_spend: number;
  transactions: ITransaction[];
}

function Dashboards() {
  const [balance, setBalance] = useState<IBalance>();
  const [values, setValues] = useState({ receita: 0, gastos: 0 });
  const [month, setMonth] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get("/balances", {
          params: {
            reference_month: "11/2020",
          },
        });

        const balance_data = response.data[0] as IBalance;

        // Remover esse array depois que arrumar o backend
        setBalance(balance_data);

        // soma total de receita e gastos
        const { gastos, receita } = balance_data.transactions.reduce(
          (accumulator, transaction) => {
            if (transaction.value < 0) {
              accumulator["gastos"] += transaction.value;
            } else {
              accumulator["receita"] += transaction.value;
            }
            return accumulator;
          },
          { receita: 0, gastos: 0 }
        );

        setValues({ gastos, receita });
      } catch (error) {
        console.log(error);
      }
    }

    loadData();
  }, []);

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
            <Box>
              <h2 className="dashboards-title">Visão Geral</h2>
              <Select
                name="month"
                label=""
                value={month}
                onChange={(e) => {
                  setMonth(e.target.value);
                }}
                options={[
                  { value: "1", label: "Janeiro" },
                  { value: "2", label: "Fevereiro" },
                  { value: "3", label: "Março" },
                  { value: "4", label: "Abril" },
                  { value: "5", label: "Maio" },
                  { value: "6", label: "Junho" },
                  { value: "7", label: "Julho" },
                  { value: "8", label: "Agosto" },
                  { value: "9", label: "Setembro" },
                  { value: "10", label: "Outubro" },
                  { value: "11", label: "Novembro" },
                  { value: "12", label: "Dezembro" },
                ]}
              />
            </Box>

            <div className="dashboards-chart-container">
              <BubbleChart
                revenue={values.receita}
                cost={values.gastos}
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
                value={values.receita}
                size="medium"
              ></Card>
              <Card
                title="Saídas"
                color="red"
                value={values.gastos}
                size="medium"
              ></Card>
              {/* <Card
                title="Gastos Futuros"
                color="orange"
                value={1250}
                size="medium"
              ></Card> */}
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
              flexDirection="column-reverse"
              width="100%"
              gridGap="8px"
            >
              {balance?.transactions?.map((transaction) => (
                <Card
                  key={transaction.id}
                  title={transaction.name}
                  color={transaction.value > 0 ? "green" : "red"}
                  value={transaction.value}
                  size="small"
                />
              ))}
            </Box>
          </section>
        </Box>
      </Box>
    </div>
  );
}

export default Dashboards;
