import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Card from "../../components/Card";
import BubbleChart from "../../components/BubbleChart";

import LinkerPageHeader from "../../components/LinkerPageHeader";
import { Box } from "@material-ui/core";
import api from "../../services/api";

import "./styles.css";
import Select from "../../components/Select";
import Input from "../../components/Input";

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
  const history = useHistory();

  const [balance, setBalance] = useState<IBalance>();
  const [values, setValues] = useState({ receita: 0, gastos: 0 });
  const [type, setType] = useState("");
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
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

  async function handleSubmit() {
    try {
      await api.post("/balances/1/transactions", {
        name,
        value,
        day_register_at: 18,
      });
    } catch (err) {
      console.log(err);
    } finally {
      history.go(0);
    }
  }

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
            <div className="dashboards-chart-container">
              <BubbleChart
                revenue={values.receita}
                cost={values.gastos}
              ></BubbleChart>
            </div>
          </section>

          <section className="inputdata">
            <h2 className="extract-title">Adicionar Lançamentos</h2>

            <Input
              name="name"
              label=""
              type="text"
              placeholder="Digite um identificador"
              value={name}
              onChange={(event) => {
                const { value } = event.target;

                setName(value);
              }}
            />

            <Box display="flex">
              <Box width="40%">
                <Select
                  name="type"
                  label=""
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  options={[
                    { value: "revenue", label: "Entrada", class: "--bg-green" },
                    { value: "cost", label: "Saída", class: "--bg-red" },
                  ]}
                />
              </Box>

              <Input
                name="value"
                label=""
                type="number"
                placeholder="Valor"
                value={value}
                onChange={(event) => {
                  const { value } = event.target;

                  setValue(value);
                }}
              />
            </Box>

            <Box>
              <Input
                name="date"
                label=""
                type="date"
                value={date}
                onChange={(event) => {
                  const { value } = event.target;

                  setDate(value);
                }}
              />
              <button className="button medium" onClick={handleSubmit}>
                Cadastrar
              </button>
            </Box>
          </section>

          <section className="dashboards-last-releases">
            <h2 className="extract-title">Últimos Lançamentos</h2>

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

export default Extract;
