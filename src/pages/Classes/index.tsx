import React from "react";

import LinkerPageHeader from "../../components/LinkerPageHeader";

import "./styles.css";

function Classes() {
  return (
    <div id="Classes">
      <LinkerPageHeader
        name="Senhor Barriga"
        to="/dashboards"
        type="return"
      ></LinkerPageHeader>
      <h1>Cursos</h1>
    </div>
  );
}

export default Classes;
