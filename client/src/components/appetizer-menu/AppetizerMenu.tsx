import React, { useContext, useEffect } from "react";
import { Store } from "../../store/Store";

// Actions
import { getAppetizers } from "../../store/actions";
import {
  Button,
  createStyles,
  GridList,
  GridListTile,
  GridListTileBar,
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
      width: 800,
      height: "100%",
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
  })
);

const AppetizerMenu = () => {
  const { state, dispatch } = useContext(Store);
  const classes = useStyles();

  useEffect(() => {
    getAppetizers(dispatch);
  }, [getAppetizers]);

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">
            <Button variant="outlined" color="secondary">
              Vegetarian
            </Button>
          </ListSubheader>
        </GridListTile>
        {state.appetizers.map((item) => (
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
        ))}
      </GridList>
    </div>
  );
};

export default AppetizerMenu;
