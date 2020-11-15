import React from "react";

import LinkerPageHeader from "../../components/LinkerPageHeader";

import image from "../../assets/images/icons/description-cash.svg";

import "./styles.css";

function CashManagement() {
  return (
    <div id="CashManagement">
      <LinkerPageHeader
        name="Senhor Barriga"
        to="/dashboards"
        type="return"
      ></LinkerPageHeader>
      <h1 className="cashManagement-title">Gestão de Caixa</h1>

      <img src={image} alt="Gestão de Caixa" className="image" />
    </div>
  );
}

export default CashManagement;
