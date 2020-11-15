import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./styles.css";

function Register() {
  return (
    <div id="page-register">
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <ArrowBackIosIcon />
          </Link>
        </div>

        <div className="page-reister__content-header">
          <h2 className="page-register__content-header-title">
            Crie sua <br></br>conta agora
          </h2>

          <p className="page-register__content-header-description">
            Basta preencher esses dados <br></br> e você estará conosco.
          </p>
        </div>
      </header>

      <div className="page-register-main">
        <main>
          <h1 className="page-register-main__form-title">01. Quem é você? </h1>

          <fieldset>
            <Input name="name" label="" type="text" placeholder="Nome" />
            <Input
              name="cnpj"
              label=""
              type="text"
              placeholder="CNPJ"
              style={{ marginTop: -16 }}
            />
            <Input
              name="email"
              label=""
              type="text"
              placeholder="E-mail"
              style={{ marginTop: -16 }}
            />
            <Input
              name="Senha"
              label=""
              type="password"
              placeholder="Senha"
              style={{ marginTop: -16 }}
            />
            <Input
              name="Confirmar Senha"
              label=""
              type="password"
              placeholder="Confirmar Senha"
              style={{ marginTop: -16 }}
            />
          </fieldset>
          <button type="button">Cadastrar</button>
        </main>
      </div>
    </div>
  );
}

export default Register;
