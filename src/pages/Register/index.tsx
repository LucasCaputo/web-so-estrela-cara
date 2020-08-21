import React from 'react';
import { Link } from 'react-router-dom';
import LogoComponent from '../../components/LogoComponent';
import Input from '../../components/Input';

import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

function Register() {
  return (
    <div id="page-register">
      <div id="page-register-content" className="container">
        <div id="show-logo-mobile">
          <LogoComponent />
        </div>
        <div className="page-register-main">
          <main>
            <Link to="/" className="button-back">
              <img src={backIcon} alt="button back" />
            </Link>
            <div>
              <h1>Cadastro</h1>
              <p>Preencha os dados abaixo <br />para começar.</p>
            </div>
            <fieldset>
              <Input
                name="name"
                label=""
                type="text"
                placeholder="Nome"
                style={{ marginBottom: -15 }}
              />
              <Input
                name="lastName"
                label=""
                type="text"
                placeholder="Sobrenome"
                style={{ marginTop: 2, marginBottom: -15 }}
              />
              <Input
                name="email"
                label=""
                type="email"
                placeholder="E-mail"
                style={{ marginTop: 2, marginBottom: -15 }}
              />
              <Input
                name="passoword"
                label=""
                type="password"
                placeholder="Senha"
                style={{ marginTop: -10 }}
              />
            </fieldset>
            <button type="button">Concluir cadastro</button>
          </main>
        </div>
        <div id="show-logo-web">
          <LogoComponent />
        </div>
      </div>
    </div>
  );
}

export default Register;
