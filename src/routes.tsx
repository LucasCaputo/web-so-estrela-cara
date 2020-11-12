import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";
import Success from "./pages/Success";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HomeLinker from "./pages/HomeLinker";
import Dashboards from "./pages/Dashboards";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/home-old" component={Landing} />
      <Route path="/home" component={HomeLinker} />
      <Route path="/dashboards" component={Dashboards} />
      <Route path="/cadastro" component={Register} />
      <Route path="/recuperar-senha" component={ForgotPassword} />
      <Route path="/pesquisar" component={TeacherList} />
      <Route path="/registrar" component={TeacherForm} />
      <Route path="/success" component={Success} />
    </BrowserRouter>
  );
}

export default Routes;
