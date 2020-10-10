import React, { Fragment, useContext, useEffect } from "react";
import { Store } from "../../store/Store";

// Actions
import { getAllRolls } from "../../store/actions";

// Material UI Imports
import {
  Button,
  createStyles,
  Grid,
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
import { IRolls } from "../../store/interfaces";

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
    gridImg: {
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain",
    },
    filterButton: {
      marginRight: "5px",
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
  })
);

const SpecialRollsMenu = () => {
  const { state, dispatch } = useContext(Store);
  const classes = useStyles();

  useEffect(() => {
    getAllRolls(dispatch);
  }, [dispatch]);

  const renderMenu = state.currentMenu.map((item) =>
    item.long_image === true ? (
      <Grid
        md={12}
        lg={6}
        item
        key={item.image}
        style={{ textAlign: "center" }}
      >
        <img className={classes.gridImg} src={item.image} alt={item.name} />
      </Grid>
    ) : (
      <Grid md={6} lg={3} item key={item.image} style={{ textAlign: "center" }}>
        <img className={classes.gridImg} src={item.image} alt={item.name} />
      </Grid>
    )
  );

  // const handleFilter = (filter: IRolls["category"]) => {
  //   filterAppetizer(state, dispatch, filter);
  // };

  // const handleShowVegetarian = () => {
  //   showVegetarianAppetizer(state, dispatch);
  // };

  return (
    <Fragment>
      <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
        <ListSubheader component="div">
          <Button
            // onClick={() => handleFilter("AL")}
            className={classes.filterButton}
            variant="outlined"
            color="secondary"
          >
            Show All
          </Button>
        </ListSubheader>
      </GridListTile>
      <div className={classes.root}>
        <Grid justify="center" spacing={1} container>
          {renderMenu}
        </Grid>
      </div>
    </Fragment>
  );
};

export default SpecialRollsMenu;
