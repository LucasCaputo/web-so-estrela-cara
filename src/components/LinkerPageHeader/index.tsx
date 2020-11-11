import React from "react";
import { Link } from "react-router-dom";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import "./styles.css";

interface PageHeaderProps {
  name: string;
  type?: string;
  to: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const classes = useStyles();
  return (
    <header id="LinkerPageHeader">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Olá <br />
            Senhor Barriga
          </Typography>
          <Button color="inherit">Linker</Button>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default PageHeader;
