import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Avatar alt="RM" src={require("../images/logo-512x512.png")} />
          </Link>
          <Typography>Cora Couture</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
