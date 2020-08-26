import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import "./assets/styles/global.css";
import Routes from "./routes";

const theme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: "#896a67"
        },
        secondary: {
            // This is green.A700 as hex.
            main: "#0d5e9c"
        }
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Routes />;
        </ThemeProvider>
    );
}

export default App;
