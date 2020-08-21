import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import LogoComponent from '../../components/LogoComponent';

import heartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Login() {
  return (
    <div id="page-login">
        <LogoComponent />
        <div className="page-login-main">
          <main>
            <div className="title">
              <h1>Fazer login</h1>
              <Link className="action" to="/cadastro">Criar uma conta</Link>
            </div>
            <fieldset>
              <Input
                name="email"
                label=""
                type="email"
                placeholder="E-mail"
              />
              <Input
                name="password"
                label=""
                type="password"
                placeholder="Senha"
              />
            </fieldset>
            <div className="remember-container">
              <input type="checkbox" name="rememberCheck" id="rememberCheck" />
              <label>Lembrar-me</label>
              <Link to="/recuperar-senha" className="buttonForget" style={{ textDecoration: "none" }}>Esqueci minha senha</Link>
            </div>
            <Link to="/home" id="buttonSignin">
              Entrar
            </Link>
          </main>
          <footer>          
            <span>Feito com<img src={heartIcon} alt="heart icon" /></span>
          </footer>
        </div>
    </div>
  )
}

export default Login;
