import React from "react";

import LinkerPageHeader from "../../components/LinkerPageHeader";

import "./styles.css";

function Integration() {
  return (
    <div id="Integration">
      <LinkerPageHeader
        name="Senhor Barriga"
        to="/home"
        type="return"
      ></LinkerPageHeader>

      <h1>Integração</h1>
    </div>
  );
}

export default Integration;
