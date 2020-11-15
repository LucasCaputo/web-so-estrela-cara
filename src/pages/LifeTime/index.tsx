import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import LinkerPageHeader from "../../components/LinkerPageHeader";
import api from "../../services/api";
import renderMessageError from "../../utils/renderMessageError";
import "./styles.css";

interface IBalance {
  id: number;
  gross_revenue: number;
  percentage_of_taxes: number;
  reference_month: string;
  total_spend: number;
  transactions_gross_revenue: number;
  transactions_total_spend: number;
}

function LifeTime() {
  const [balances, setBalance] = useState<IBalance[]>([]);

  const loadData = useCallback(async function () {
    try {
      const response = await api.get("/balances");

      setBalance(response.data);
    } catch (error) {
      toast.error(renderMessageError(error));
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);
  return (
    <div id="LifeTime">
      <LinkerPageHeader
        name="Senhor Barriga"
        to="/dashboards"
        type="return"
      ></LinkerPageHeader>
      <h1>Criar Cenários</h1>

      <div id="corpo" style={{ display: "flex" }}>
        <div id="aside-info" style={{ background: "#eee", width: 150 }}>
          <p>Mês</p>
          <p>Saldo em caixa</p>
          <p>Receita Bruta</p>
          <p>Gastos</p>
          <p>Imposto</p>
          <p>Resultado</p>
        </div>
        <div
          id="balances-table"
          style={{
            display: "flex",
            width: "100%",
            overflowX: "auto",
          }}
        >
          {balances.map((balance) => (
            <div
              id="balance-card"
              key={balance.id}
              style={{ borderLeft: "1px  solid #000" }}
            >
              <p>{balance.reference_month}</p>
              <p>Saldo em caixa</p>
              <p>{balance.gross_revenue}</p>
              <p>
                <input type="text" defaultValue={balance.total_spend} />
              </p>
              <p>
                {balance.gross_revenue *
                  Number((1 - balance.percentage_of_taxes).toFixed(4))}
                ({Number((1 - balance.percentage_of_taxes).toFixed(4)) * 100}%)
              </p>
              <p>
                {balance.percentage_of_taxes * balance.gross_revenue -
                  balance.total_spend}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LifeTime;
