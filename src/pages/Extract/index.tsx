import React, { useCallback, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

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
  transactions_gross_revenue: number;
  transactions_total_spend: number;
}

function Extract() {
  const history = useHistory();

  const [balance, setBalance] = useState<IBalance>();
  const [type, setType] = useState("");
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const [month, setMonth] = useState(String(new Date().getMonth() + 1));
  const [year, setYear] = useState(String(new Date().getFullYear()));

  const loadData = useCallback(
    async function () {
      try {
        const reference_month = `${month}/${year}`;

        const response = await api.get("/balances/transactions", {
          params: {
            reference_month,
          },
        });

        const balance_data = response.data as IBalance;

        setBalance(balance_data);
        setValue("");
        setName("");
      } catch (error) {
        console.log(error);
      }
    },
    [month, year],
  );

  useEffect(() => {
    loadData();
  }, [loadData]);

  async function handleSubmit() {
    const value_validated =
      Number(value) > 0 && type === "cost" ? Number(value) * -1 : value;

    const day_register_at = date.split("-")[2];

    try {
      await api.post(`/balances/${balance?.id}/transactions`, {
        name,
        value: value_validated,
        day_register_at,
      });

      loadData();
    } catch (err) {
      console.log(err);
    }
  }

  async function handleRemove(id: number) {
    await api.delete(`/balances/${balance?.id}/transactions/${id}`);
    loadData();
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
            <Box display="flex">
              <Select
                name="month"
                label=""
                value={month}
                onChange={(e) => {
                  setMonth(e.target.value);
                }}
                options={[
                  { value: "01", label: "Janeiro" },
                  { value: "02", label: "Fevereiro" },
                  { value: "03", label: "Março" },
                  { value: "04", label: "Abril" },
                  { value: "05", label: "Maio" },
                  { value: "06", label: "Junho" },
                  { value: "07", label: "Julho" },
                  { value: "08", label: "Agosto" },
                  { value: "09", label: "Setembro" },
                  { value: "10", label: "Outubro" },
                  { value: "11", label: "Novembro" },
                  { value: "12", label: "Dezembro" },
                ]}
              />
              <Select
                name="year"
                label=""
                value={year}
                onChange={(e) => {
                  setYear(e.target.value);
                }}
                options={[
                  { value: "2020", label: "2020" },
                  { value: "2019", label: "2019" },
                  { value: "2018", label: "2018" },
                ]}
              />
            </Box>
            <div className="dashboards-chart-container">
              {!balance ? (
                <></>
              ) : (
                // Link para página de Integration (Importação de planilha)
                <>
                  <Link className="button" to="/integracao">
                    Importação de dados
                  </Link>
                  <BubbleChart
                    revenue={balance.transactions_gross_revenue}
                    cost={balance.transactions_total_spend}
                  />
                </>
              )}
            </div>
          </section>
          {!balance ? (
            <>
              <h2>
                Você precisa cadastrar um balanço nesse mês ou importar os dados{" "}
              </h2>
              <Link className="button" to="/integracao">
                Importação de dados
              </Link>
              <button className="button">
                Clique aqui cadastrar um balanço
              </button>
              {/* <button className="button">Clique aqui para importar</button> */}
            </>
          ) : (
            <>
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
                        {
                          value: "revenue",
                          label: "Entrada",
                          class: "--bg-green",
                        },
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
                      handleRemove={() => {
                        handleRemove(transaction.id);
                      }}
                    />
                  ))}
                </Box>
              </section>
            </>
          )}
        </Box>
      </Box>
    </div>
  );
}

export default Extract;
