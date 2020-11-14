import React from "react";
import BasicTable from "../../components/Table";

import LinkerPageHeader from "../../components/LinkerPageHeader";
import "./styles.css";

function LifeTime() {
  return (
    <div id="LifeTime">
      <LinkerPageHeader
        name="Senhor Barriga"
        to="/dashboards"
        type="return"
      ></LinkerPageHeader>
      <h1>Criar Cenários</h1>

      <BasicTable></BasicTable>
    </div>
  );
}

export default LifeTime;
