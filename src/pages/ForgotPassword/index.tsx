import React from 'react';
import { Link } from 'react-router-dom';
import PageHeaderLogo from '../../components/PageHeaderLogo';
import Input from '../../components/Input';

import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

function ForgotPassword() {
  return (
    <div id="page-forgot">
      <div id="page-forgot-content">
          <PageHeaderLogo />
        <div className="page-forgot-main">
          <main>
            <Link to="/" className="button-back">
              <img src={backIcon} alt="button back" />
            </Link>
            <div>
              <h1>Eita, esqueceu <br /> sua senha?</h1>
              <p>Não se preocupe, daremos um jeito nisso.</p>
            </div>
            <fieldset>
              <Input
                name="email"
                label=""
                type="email"
                placeholder="E-mail"
                style={{ marginTop: 2, marginBottom: -15 }}
              />
            </fieldset>
            <button type="button">Enviar</button>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
