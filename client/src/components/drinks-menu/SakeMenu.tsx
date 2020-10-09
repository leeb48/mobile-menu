import React, { Fragment, useContext, useEffect } from "react";
import { Store } from "../../store/Store";

// Actions
import { getSake, filterSake } from "../../store/actions";
import {
  Button,
  createStyles,
  Grid,
  GridListTile,
  ListSubheader,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { ISake } from "../../store/interfaces";

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

const SakeMenu = () => {
  const { state, dispatch } = useContext(Store);
  const classes = useStyles();

  useEffect(() => {
    getSake(dispatch);
  }, [dispatch]);

  // Filter Button Handlers
  const handleFilter = (filter: ISake["category"]) => {
    filterSake(state, dispatch, filter);
  };

  return (
    <Fragment>
      <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
        <ListSubheader component="div">
          <Button
            className={classes.filterButton}
            onClick={() => handleFilter("AL")}
            variant="outlined"
            color="secondary"
          >
            Show All
          </Button>
          <Button
            className={classes.filterButton}
            onClick={() => handleFilter("H")}
            variant="outlined"
            color="secondary"
          >
            House Sake
          </Button>
          <Button
            className={classes.filterButton}
            onClick={() => handleFilter("G")}
            variant="outlined"
            color="secondary"
          >
            Gin-Jo
          </Button>
          <Button
            className={classes.filterButton}
            onClick={() => handleFilter("J")}
            variant="outlined"
            color="secondary"
          >
            Jun-Mai
          </Button>
        </ListSubheader>
      </GridListTile>
      <Grid container>
        {state.currentMenu.map((menu) => (
          <Grid className={classes.gridItem} xs={12} item>
            <img className={classes.gridImg} src={menu.image} alt="" />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default SakeMenu;
