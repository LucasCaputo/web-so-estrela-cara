import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import './styles.css';

function LogoComponent() {
  return (
    <div id="logo-component">
      <img src={logoImg} alt="Logo" />
      <p>Seu histórico de clientes<br />sempre atualizado</p>
    </div>
  )
}

export default LogoComponent;
