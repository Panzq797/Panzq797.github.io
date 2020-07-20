import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import Layout from "../components/layout";
import Brand from "../components/brandf";

var listOfBrands = [
  {
    name: "Zara",
    comment: "La qualité des vêtements était impeccable. Tellement impressionné par cette entreprise! Les vêtements correspondent à la taille.",
    photoFileName: "zara.jpg",
    vFileName:"zara.mp4"
  },
  {
    name: "H&M",
    comment: "La qualité du produit est bonne, son prix est très raisonnable. Son bon rapport qualité prix.",
    photoFileName: "hm.jpg",
    vFileName:"hm.mp4"
  },
  {
    name: "FOREVER21",
    comment: "J'aime faire du shopping ici dans l'un de mes magasins préférés. Ayant une sélection dans toutes les formes et tailles. Très abordable.",
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
      
        <Button style={{marginBottom:"0.5rem",marginTop:"0.5rem", width:"15rem"}} component={Link} variant="contained" color="primary" to={"/"+brand.name}>acheter</Button>
      </Grid>
    );
  });

const BrandF = () => (
  <Layout>
    <Grid container direction="column" align="center">
      <h1 style={{fontSize:"4rem", marginBottom:0}}>Marques</h1>
      {generateBrandList()}
    </Grid>
  </Layout>
);

export default BrandF;
