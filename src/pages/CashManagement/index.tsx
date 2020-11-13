import React from "react";

import LinkerPageHeader from "../../components/LinkerPageHeader";

import "./styles.css";

function CashManagement() {
  return (
    <div id="CashManagement">
      <LinkerPageHeader
        name="Senhor Barriga"
        to="/dashboards"
        type="return"
      ></LinkerPageHeader>
      <h1>Gestão de Caixa</h1>
    </div>
  );
}

export default CashManagement;
