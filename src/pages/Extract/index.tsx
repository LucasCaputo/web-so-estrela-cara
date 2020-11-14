import React, { useEffect, useState } from "react";

import Card from "../../components/Card";
import BubbleChart from "../../components/BubbleChart";

import LinkerPageHeader from "../../components/LinkerPageHeader";
import { Box } from "@material-ui/core";
import api from "../../services/api";

import "./styles.css";

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

function Extract() {
  const [balance, setBalance] = useState<IBalance>();
  const [values, setValues] = useState({ receita: 0, gastos: 0 });

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
                revenue={values.receita}
                cost={values.gastos}
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
              {balance?.transactions?.map((transaction) => (
                <Card
                  key={transaction.id}
                  title={transaction.name}
                  color={transaction.value > 0 ? "green" : "red"}
                  value={transaction.value}
                  size="small"
                />
              ))}

              {/* <Card
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
              <Card title="Luz" color="red" value="100,00" size="small"></Card> */}
            </Box>
          </section>
        </Box>
      </Box>
    </div>
  );
}

export default Extract;
