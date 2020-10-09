import React, { Fragment, useContext, useEffect } from "react";
import { Store } from "../../store/Store";

// Actions
import {
  getSake,
  showAllSake,
  showHouseSake,
  showGinjo,
} from "../../store/actions";
import {
  Button,
  createStyles,
  Grid,
  GridListTile,
  ListSubheader,
  makeStyles,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.primary.main,
    },
    gridItem: {
      textAlign: "center",
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
  })
);

const SakeMenu = () => {
  const { state, dispatch } = useContext(Store);
  const classes = useStyles();

  useEffect(() => {
    getSake(dispatch);
  }, [dispatch]);

  // Filter Button Handlers
  const handleShowAll = () => {
    showAllSake(state, dispatch);
  };

  const handleShowHouseSake = () => {
    showHouseSake(state, dispatch);
  };

  const handleShowGinjo = () => {
    showGinjo(state, dispatch);
  };

  return (
    <Fragment>
      <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
        <ListSubheader component="div">
          <Button onClick={handleShowAll} variant="outlined" color="secondary">
            Show All
          </Button>
          <Button
            onClick={handleShowHouseSake}
            variant="outlined"
            color="secondary"
          >
            House Sake
          </Button>
          <Button variant="outlined" color="secondary">
            Jun-Mai
          </Button>
          <Button
            onClick={handleShowGinjo}
            variant="outlined"
            color="secondary"
          >
            Gin-Jo
          </Button>
        </ListSubheader>
      </GridListTile>
      <Grid container>
        {state.currentMenu.map((menu) => (
          <Grid className={classes.gridItem} xs={12} item>
            <img src={menu.image} alt="" />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default SakeMenu;
