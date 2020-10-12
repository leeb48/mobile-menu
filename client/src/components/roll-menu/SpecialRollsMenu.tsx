import { Card, CardMedia, Grid } from "@material-ui/core";
import React from "react";

const SpecialRollsMenu = () => {
  return (
    <Grid container justify="center">
      <Grid item sm={12} md={10}>
        <Card style={{ width: "100%", marginTop: "2rem" }}>
          <CardMedia
            component="img"
            alt="Hand Rolls &amp; Cut Rolls"
            style={{ width: "100%", height: "100%" }}
            image={require("../../img/rolls-1.PNG")}
          />
        </Card>
        <Card style={{ width: "100%" }}>
          <CardMedia
            component="img"
            alt="Hand Rolls &amp; Cut Rolls"
            style={{ width: "100%", height: "100%" }}
            image={require("../../img/rolls-2.PNG")}
          />
        </Card>
        <Card style={{ width: "100%" }}>
          <CardMedia
            component="img"
            alt="Hand Rolls &amp; Cut Rolls"
            style={{ width: "100%", height: "100%" }}
            image={require("../../img/rolls-3.PNG")}
          />
        </Card>
        <Card style={{ width: "100%" }}>
          <CardMedia
            component="img"
            alt="Hand Rolls &amp; Cut Rolls"
            style={{ width: "100%", height: "100%" }}
            image={require("../../img/rolls-4.PNG")}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default SpecialRollsMenu;
