import React from "react";

import LinkerPageHeader from "../../components/LinkerPageHeader";

import "./styles.css";

function Extract() {
  return (
    <div id="Extract">
      <LinkerPageHeader
        name="Senhor Barriga"
        to="/dashboards"
        type="return"
      ></LinkerPageHeader>

      <h1>Extrato</h1>
    </div>
  );
}

export default Extract;
