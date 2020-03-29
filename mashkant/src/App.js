import React, { Fragment } from "react";
import MyTable from "./MyTable";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { Provider } from "react-redux";
import store from "./redux/store";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Fragment>
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
              Morgana
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        <h1 style={{ textAlign: "center" }}>Choose your route</h1>
        <MyTable></MyTable>
      </Fragment>
    </Provider>
  );
};

export default App;
