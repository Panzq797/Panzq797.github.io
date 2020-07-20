import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


import {
  FormControl,
  MenuItem,
  Select,
  IconButton,
  OutlinedInput,
  InputLabel,
  makeStyles
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import Logo from "./images/logo-512x512.png";

/*
 * Defines styles for dropdown box
 */
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

/*
 * Generates dropdown box containing Ottawa, Toronto and Montreal
 */
function SimpleSelect() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    city: ""
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(150);
  }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel
        ref={inputLabel}
        htmlFor="outlined-city-simple"
        style={{ paddingTop: "0.5rem" }}
      >
        City
      </InputLabel>
      <Select
        style={{ marginTop: "0.5rem" }}
        value={values.city}
        onChange={handleChange}
        input={
          <OutlinedInput
            labelWidth={labelWidth}
            name="city"
            id="outlined-city-simple"
          />
        }
      >
        <MenuItem value="">
          <em></em>
        </MenuItem>
        <MenuItem value="Ottawa">Ottawa</MenuItem>
        <MenuItem value="Toronto">Toronto</MenuItem>
      </Select>
    </FormControl>
  );
}

function App() {
  const classes = useStyles();
  return (
    <div id="container">
      <div id="header">
        <img src={Logo} height="300" width="300" alt="logo" />
        <div>
          <TextField
            id="SearchBar"
            fontSize="20px"
            font-weight="bold"
            label="Search for a Brand"
            placeholder=""
            className={classes.textField}
            margin="normal"
            variant="outlined"
            style={{ fontSize: "2.5rem" }}
          />
          <SimpleSelect />
          <Link to="/brands">
            <IconButton
              color="white"
              aria-label="Search"
              style={{ marginTop: "1.1rem" }}
            >
              <SearchIcon />
            </IconButton>
          </Link>
          <br />
          <Link to="/bags">
            <Button className={classes.button}>BAGS</Button>
          </Link>
          <Link to="/clothing">
            <Button className={classes.button}>CLOTHING</Button>
          </Link>
          <Link to="/shoes">
            <Button className={classes.button}>SHOES</Button>
          </Link>
          
          <br />
          <Link to="/french">
            <Button className={classes.button}>Français</Button>
          </Link>
          <Link to="/brands">
            <Button className={classes.button}>English</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
