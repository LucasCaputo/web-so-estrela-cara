import React from "react";
import LinkerPageHeader from "../../components/LinkerPageHeader";

import "./styles.css";

function Dashboards() {
  return (
    <div id="Dashboards">
      <div className="dashboards-content">
        <LinkerPageHeader name="Senhor Barriga" to="/home"></LinkerPageHeader>
      </div>
    </div>
  );
}

export default Dashboards;
