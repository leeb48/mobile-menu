import React, { Fragment, useContext, useEffect } from "react";
import { Store } from "../../store/Store";

// Actions
import { getSoftDrinks } from "../../store/actions";
import {
  Button,
  createStyles,
  GridList,
  GridListTile,
  GridListTileBar,
  Hidden,
  IconButton,
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
    gridList: {
      width: "100%",
      height: "100%",
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
  })
);

const SoftDrinksMenu = () => {
  const { state, dispatch } = useContext(Store);
  const classes = useStyles();

  useEffect(() => {
    getSoftDrinks(dispatch);
  }, [dispatch]);

  const renderMenu = state.currentMenu.map((item) => (
    <GridListTile key={item.image}>
      <img src={item.image} alt={item.name} />
      <GridListTileBar
        title={item.name}
        subtitle={<span>{item.description}</span>}
        actionIcon={
          <IconButton
            aria-label={`info about ${item.name}`}
            className={classes.icon}
          ></IconButton>
        }
      />
    </GridListTile>
  ));

  return (
    <Fragment>
      <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
        <ListSubheader component="div">
          <Button variant="outlined" color="secondary">
            Show All
          </Button>
          <Button variant="outlined" color="secondary">
            Refillable
          </Button>
          <Button variant="outlined" color="secondary">
            Non-Refillable
          </Button>
        </ListSubheader>
      </GridListTile>
      <div className={classes.root}>
        <Hidden only={["md", "lg", "xl"]}>
          <GridList cellHeight={200} cols={2} className={classes.gridList}>
            {renderMenu}
          </GridList>
        </Hidden>

        <Hidden only={["xs", "sm"]}>
          <GridList cellHeight={400} cols={3} className={classes.gridList}>
            {renderMenu}
          </GridList>
        </Hidden>
      </div>
    </Fragment>
  );
};

export default SoftDrinksMenu;
