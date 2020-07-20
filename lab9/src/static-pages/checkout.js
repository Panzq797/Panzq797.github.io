import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";

import "../styles/checkout.css";
import Layout from "../components/layout";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  formControl: {
    margin: theme.spacing(3)
  },
  group: {
    margin: theme.spacing(1, 0)
  }
}));

const Checkout = props => {
  const classes = useStyles();
  const { cost } = props.location.state;
  const [value, setValue] = React.useState("Credit Card");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <Layout>
        <div className={classes.root}>
          <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Checkout</h1>
          <Grid container spacing={3} alignItems="center" justify="center">
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <h2>Shipping Address</h2>
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <TextField
                      id="standard-with-placeholder"
                      label="First Name"
                      placeholder="e.g. Joanna"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="standard-with-placeholder"
                      label="Last Name"
                      placeholder="e.g. Pan"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="standard-with-placeholder"
                      label="Email"
                      placeholder="e.g. example@email.com"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      type="number"
                      id="standard-with-placeholder"
                      label="Phone"
                      placeholder="e.g. XXXXXXXXXX"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      id="standard-with-placeholder"
                      label="Address"
                      placeholder="e.g. 123 Example Street"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      id="standard-with-placeholder"
                      label="Address 2"
                      placeholder="e.g. Floor X, Apt #X, etc"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="standard-with-placeholder"
                      label="City"
                      placeholder="e.g. Canada"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="standard-with-placeholder"
                      label="Province"
                      placeholder="e.g. Ontario"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="standard-with-placeholder"
                      label="ZIP Code"
                      placeholder="e.g. A1A-2B2"
                      margin="normal"
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h2>Payment</h2>
                <Grid container spacing={3}>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <FormLabel component="legend">Payment Option</FormLabel>
                    <RadioGroup
                      aria-label="Payment Option"
                      name="Choice"
                      className={classes.group}
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="VISA"
                        control={<Radio color="primary" />}
                        label="VISA"
                      />
                      <FormControlLabel
                        value="MasterCard"
                        control={<Radio color="primary" />}
                        label="MasterCard"
                      />
                    </RadioGroup>
                  </FormControl>
                  <Grid item xs={12}>
                    <TextField
                      id="standard-with-placeholder"
                      label="Card Number"
                      placeholder="XXXX-XXXX-XXXX-XXXX"
                      margin=""
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="standard-with-placeholder"
                      label="Expiry Date"
                      placeholder="MM/YY"
                      margin=""
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="standard-with-placeholder"
                      label="Security Code"
                      placeholder="XXX"
                      margin=""
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <br />
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h2>Review Order</h2>
                {

                }
                <Grid container spacing={3}>
                  <Grid item xs>
                    <p>Your item:</p>
                    {cost}
                  </Grid>
                  <Grid item xs>
                    <p>Shipping</p>
                    <p>Free</p>
                  </Grid>
                  <Grid item xs>
                    <p>Tax:</p>
                    {(cost * 0.13).toFixed(2)}
                  </Grid>
                  <Grid item xs>
                    <p>Estimated total:</p>
                    {(cost * 1.13).toFixed(2)}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs>
              {
                
              }
              <h4>Place order and pay now</h4>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                marginLeft="2rem"
              >
                {" "}
                PLACE ORDER{" "}
              </Button>
            </Grid>
          </Grid>
        </div>
      </Layout>
    </div>
  );
};

export default Checkout;
