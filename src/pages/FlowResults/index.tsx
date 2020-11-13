import React from "react";

import LinkerPageHeader from "../../components/LinkerPageHeader";

import "./styles.css";

function FlowResults() {
  return (
    <div id="FlowResults">
      <LinkerPageHeader
        name="Senhor Barriga"
        to="/dashboards"
        type="return"
      ></LinkerPageHeader>
      <h1>Fluxo Resultados</h1>
    </div>
  );
}

export default FlowResults;
