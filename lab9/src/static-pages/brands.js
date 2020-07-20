import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import Layout from "../components/layout";
import Brand from "../components/brand";

var listOfBrands = [
  {
    name: "Zara",
    comment: "The quality of the clothing was impeccable. So impressed with this company! The clothes fit true to size.",
    photoFileName: "zara.jpg",
    vFileName:"zara.mp4"
  },
  {
    name: "H&M",
    comment: "The quality of the product is good, its very reasonably priced. Its good value for money.",
    photoFileName: "hm.jpg",
    vFileName:"hm.mp4"
  },
  {
    name: "FOREVER21",
    comment: "I enjoy shopping here one of my favorite stores. Having selection in all shapes and sizes. Very affordable.",
    photoFileName: "forever21.jpg",
    vFileName:"forever21.mp4"
    
  }
];

const generateBrandList = (props) =>
  listOfBrands.map(function(brand, index) {
    return (
      <Grid item key={index} style={{ borderBottom: "2px solid", padding:"0 2rem 0 2rem" }}>
        <Brand
          name={brand.name}
          photoFileName={brand.photoFileName}
          comment={brand.comment}
          vFileName={brand.vFileName}
        />
      
        <Button style={{marginBottom:"0.5rem",marginTop:"0.5rem", width:"15rem"}} component={Link} variant="contained" color="primary" to={"/"+brand.name}>Shop it</Button>
      </Grid>
    );
  });

const Brands = () => (
  <Layout>
    <Grid container direction="column" align="center">
      <h1 style={{fontSize:"4rem", marginBottom:0}}>Brands</h1>
      {generateBrandList()}
    </Grid>
  </Layout>
);

export default Brands;
