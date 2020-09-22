import React from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__info">
        <h1>Explore your World!</h1>
        <h5>
          AwesomE experiences is what we aim to give you and your Loved Ones
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
