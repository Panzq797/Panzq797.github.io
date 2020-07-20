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

import knotted from '../images/knotted.JPG';
import flowy from '../images/flowy.JPG';
import rustic from '../images/rustic.JPG';
import textured from '../images/textured.JPG';
import cotton from '../images/cotton.JPG';
import jersey from '../images/jersey.JPG';
import oversized from '../images/oversized.JPG';
import pleated from '../images/pleated.JPG';
import shorts from '../images/shorts.JPG';
import graphic from '../images/graphic.JPG';
import bow from '../images/bow.JPG';
import floral from '../images/floral.JPG';
import mini from '../images/mini.JPG';
import camo from '../images/camo.JPG';






const coDetails = [
  {
    name: "zara",
    collection: [
      { itemName: "KNOTTED T-SHIRT", itemPrice: 39.90, count: 0, src:knotted},
      { itemName: "FLOWY SHIRT", itemPrice: 45.90, count: 0, src:flowy},
      { itemName: "RUSTIC BLOUSE", itemPrice: 79.90, count: 0,src:rustic },
      { itemName: "TEXTURED SHORTS", itemPrice: 45.90, count: 0,src:textured },
      { itemName: "Cotton T-shirt", itemPrice: 14.99, count: 0, src:cotton},
      { itemName: "Short Jersey Top", itemPrice: 14.99, count: 0, src:jersey}, 
      { itemName: "Oversized T-shirt", itemPrice: 29.99, count: 0,src:oversized },
      { itemName: "Pleated Skirt", itemPrice: 29.99, count: 0,src:pleated },
      { itemName: "Denim Shorts", itemPrice: 14.99, count: 0,src:shorts },
      { itemName: "Graphic Tee", itemPrice: 19.00, count: 0, src:graphic},
      { itemName: "Bow-Front Crop Top", itemPrice: 27.00, count: 0, src:bow},
      { itemName: "Floral Crop Top", itemPrice: 22.00, count: 0,src:floral },
      { itemName: "Pleated Mini Skirt", itemPrice: 21.00, count: 0,src:mini },
      { itemName: "Camo Print Shorts", itemPrice: 22.00, count: 0,src:camo }
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

const Clothing = props => {
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
            <Tab label="Clothing" icon={<StoreIcon />} />
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

export default Clothing;
