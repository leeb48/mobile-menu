import React, { Fragment, useContext, useEffect } from "react";
import { Store } from "../../store/Store";

// Actions
import { getAllNigiri, filterNigiri } from "../../store/actions";

// Material UI Imports
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

// Import Interfaces
import { INigiri } from "../../store/interfaces";

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
    filterButton: {
      marginRight: "5px",
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
  })
);

const NigiriMenu = () => {
  const { state, dispatch } = useContext(Store);
  const classes = useStyles();

  useEffect(() => {
    getAllNigiri(dispatch);
  }, [dispatch]);

  const renderMenu = state.currentMenu.map((item) => (
    <GridListTile key={item.image}>
      <img src={item.image} alt={item.name} />
      <GridListTileBar
        title={
          <span>
            {item.name} / {item.price}
          </span>
        }
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

  const handleFilter = (filter: INigiri["category"]) => {
    filterNigiri(state, dispatch, filter);
  };

  //   const handleShowVegetarian = () => {
  //     showVegetarianAppetizer(state, dispatch);
  //   };

  return (
    <Fragment>
      <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
        <ListSubheader component="div">
          <Button
            onClick={() => handleFilter("AL")}
            className={classes.filterButton}
            variant="outlined"
            color="secondary"
          >
            Show All
          </Button>
          <Button
            onClick={() => handleFilter("R")}
            className={classes.filterButton}
            variant="outlined"
            color="secondary"
          >
            Raw
          </Button>
          <Button
            onClick={() => handleFilter("C")}
            className={classes.filterButton}
            variant="outlined"
            color="secondary"
          >
            Cooked
          </Button>
        </ListSubheader>
      </GridListTile>
      <div className={classes.root}>
        <Hidden only={["lg", "xl"]}>
          <GridList cellHeight={200} cols={2} className={classes.gridList}>
            {renderMenu}
          </GridList>
        </Hidden>

        <Hidden only={["xs", "sm", "md"]}>
          <GridList cellHeight={400} cols={3} className={classes.gridList}>
            {renderMenu}
          </GridList>
        </Hidden>
      </div>
    </Fragment>
  );
};

export default NigiriMenu;
