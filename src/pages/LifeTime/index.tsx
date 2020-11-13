import React from "react";

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
      <h1>Tempo de Vida</h1>
    </div>
  );
}

export default LifeTime;
