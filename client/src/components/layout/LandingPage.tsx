import { Card, CardMedia, Grid } from "@material-ui/core";
import React from "react";

const LandingPage = () => {
  return (
    <Grid container justify="center">
      <Grid item sm={12} md={7}>
        <Card style={{ width: "100%" }}>
          <CardMedia
            component="img"
            alt="Landing Page"
            style={{ width: "100%", height: "100%" }}
            image={require("../../img/LandingPage.PNG")}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
