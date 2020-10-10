import { Card, CardMedia, Grid } from "@material-ui/core";
import React from "react";

const HandOrCutRollsMenu = () => {
  return (
    <Grid container justify="center">
      <Grid item sm={12} md={10}>
        <Card style={{ width: "100%", marginTop: "2rem" }}>
          <CardMedia
            component="img"
            alt="Hand Rolls &amp; Cut Rolls"
            style={{ width: "100%", height: "100%" }}
            image={require("../../img/hand-or-cut-rolls.PNG")}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default HandOrCutRollsMenu;
