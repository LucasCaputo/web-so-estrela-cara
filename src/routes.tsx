import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";
import Success from "./pages/Success";

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/pesquisar" exact component={TeacherList} />
            <Route path="/registrar" exact component={TeacherForm} />
            <Route path="/success" component={Success} />
        </BrowserRouter>
    );
}

export default Routes;
