import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";



const Brand = (props) => (
  <div className="Brands">
    <div>
      <br></br>
    
      <img src={require("../images/" + props.photoFileName)} alt={props.name} height="40" width="80" /><br></br>
      <video src={require("../images/" + props.vFileName)} height="300" width="450" controls></video>
      <br />
      <p><b>Comments</b>: { props.comment }
      <br /></p>
      <TextField id="standard-basic" label="" />
			<Button>Write a review</Button>
    </div>
  </div>
);


export default Brand;
