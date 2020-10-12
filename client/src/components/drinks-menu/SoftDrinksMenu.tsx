import { Card, CardMedia, Grid } from "@material-ui/core";
import React from "react";

const SoftDrinksMenu = () => {
  return (
    <Grid style={{ marginTop: "3rem" }} container justify="center">
      <Grid item sm={12} md={7}>
        <Card style={{ width: "100%" }}>
          <CardMedia
            component="img"
            alt="Wine list"
            style={{ width: "100%", height: "100%" }}
            image={require("../../img/soft-drinks.PNG")}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default SoftDrinksMenu;
