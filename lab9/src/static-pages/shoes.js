import React from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";

import green from "@material-ui/core/colors/green";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import StoreIcon from "@material-ui/icons/Store";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  Typography,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core";

import Layout from "../components/layout";
import "../styles/brand.css";

import sandals from '../images/sandals.JPG';
import sneakers from '../images/sneakers.JPG';
import platform from '../images/platform.JPG';
import faux from '../images/faux.JPG';






const coDetails = [
  {
    name: "zara",
    collection: [
      { itemName: "LEATHER SANDALS", itemPrice: 20.90, count: 0,src:sandals },
      { itemName: "Sneakers", itemPrice: 49.99, count: 0 ,src:sneakers},
      { itemName: "Platform Sneakers", itemPrice: 39.99, count: 0,src:platform },
      { itemName: "Faux Pointed Mules", itemPrice: 22.00, count: 0 ,src:faux},

    ]
  },
  {
    name: "hm",
    collection: [
      
    ]
  },
  {
    name: "forever21",
    collection: [
      
    ]
  }
];

const greenTheme = createMuiTheme({
  palette: {
    primary: { main: green[500] }
  }
});

var shoppingCart = [];
var total = 0;

const Shoes = props => {
  const { id } = props.match.params;
  const [tabValue, setTabValue] = React.useState(0);

  function handleTabChange(event, newValue) {
    setTabValue(newValue);
  }

  const handleClickAdd = item => {
    var index = shoppingCart.indexOf(item);
    if (index > -1) {
      shoppingCart.splice(index, 1);
    }
    item.count++;
    shoppingCart.push(item);
    console.log(shoppingCart[0]);
  };

  const handleClickRemove = item => {
    var index = shoppingCart.indexOf(item);
    shoppingCart[index].count--;
    if ( shoppingCart[index].count <= 0)
      shoppingCart.splice(index, 1);
  };

  const CoItem = () => {
    var coIndex = 0;
    for (var i = 0; i < coDetails.length; i++) {
      if (coDetails[i].name === "Zara") {
        coIndex = 0
      }else if(coDetails[i].name === "hm"){
        coIndex = 1
      }else {
        coIndex = 0
      }
    }

    return coDetails[coIndex].collection.map(function(coItem, index) {
      return (
        <Grid
          container
          alignItems="center"
          direction="row"
          justify="space-around"
          className="menu-item-border"
        >
          <h4 style={{ textTransform: "capitalize" }}>{coItem.itemName}</h4>
          <h4 style={{ margin: "0 auto" }}>{coItem.itemPrice+"CAD"}</h4>
          <img src={coItem.src}  height="100" width="100" alt="www.zara.com"/>
          <div>
            <MuiThemeProvider theme={greenTheme}>
              <IconButton
                color="primary"
                onClick={() => handleClickAdd(coItem)}
              >
                <AddCircleIcon />
              </IconButton>
            </MuiThemeProvider>
            <Typography />
            <IconButton
              color="primary"
              onClick={() => handleClickRemove(coItem)}
            >
              <RemoveCircleIcon />
            </IconButton>
          </div>
        </Grid>
      );
    });
  };

  const Cart = () => {
    total=0;
    if (shoppingCart.length !== 0) {
      // Calculate total
      shoppingCart.forEach(item => {
        total += item.itemPrice * item.count;
      });

      // Generate html
      var elements = [];
      shoppingCart.forEach(cartItem => {
        elements.push(
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            className="cart-item-border"
            style={{
              paddingTop: "0.2vh",
              paddingBottom: "0.2vh"
            }}
          >
            <div className="item-price-text">
              <h3 style={{ textTransform: "capitalize" }}>
                {cartItem.itemName}
              </h3>
              <h3>{"$" + cartItem.itemPrice}</h3><br></br>
            </div>
            <h3><br></br>{"x" +cartItem.count}</h3>
          </Grid>
        );
      });
      elements.push(
        <Grid container direction="column" alignItems="center">
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            className="cart-item-border"
          >
            <h3>{"SubTotal: $" + total}</h3>
          </Grid>
          <MuiThemeProvider theme={greenTheme}>
            <Link to={{ pathname:"/checkout", state: {cost: total} }}>
              <Button variant="outlined" color="primary">
                Proceed To Checkout
              </Button>
            </Link>
          </MuiThemeProvider>
        </Grid>
      );

      return elements;
    }
    return <h3>Your Shopping Cart is Empty </h3>;
  };

  return (
    <Layout>
      <Grid container direction="column" align="center">
        <div id="jumbotrona">
          <Typography color="secondary" variant="h1">
            {id}
          </Typography>
        </div>
        <AppBar position="static" color="default">
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="fullWidth"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Shoes" icon={<StoreIcon />} />
            <Tab label="Cart" icon={<ShoppingCartIcon />} />
          </Tabs>
        </AppBar>
        {tabValue === 0 && (
          <Grid container direction="column" style={{ width: "30%" }}>
            <h1>COLLECTION</h1>
            <CoItem coName={id} />
          </Grid>
        )}
        {tabValue === 1 && (
          <Grid container direction="column" style={{ width: "20%" }}>
            <h1>Cart</h1>
            <Cart />
          </Grid>
        )}
      </Grid>
    </Layout>
  );
};

export default Shoes;
