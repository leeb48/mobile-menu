import React, { Fragment, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Menu, MenuItem } from "@material-ui/core";

// SVG Imports
import { ReactComponent as AppetizerSVG } from "../../img/appetizer.svg";
import { ReactComponent as TempuraSVG } from "../../img/tempura.svg";
import { ReactComponent as NoodleSVG } from "../../img/noodles.svg";
import { ReactComponent as SoupSVG } from "../../img/soups.svg";
import { ReactComponent as SaladSVG } from "../../img/salad.svg";
import { ReactComponent as DrinkSVG } from "../../img/Drinks.svg";
import { ReactComponent as SodaSVG } from "../../img/soda.svg";
import { ReactComponent as WineSVG } from "../../img/wine.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menu: {
      backgroundColor: theme.palette.primary.main,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    svgStyle: {
      fill: theme.palette.secondary.main,
      width: "3rem",
      height: "3rem",
      marginRight: "10px",
    },
  })
);

export default function Navbar() {
  const classes = useStyles();

  const [
    appetizerAnchorEl,
    setAppetizerAnchorEl,
  ] = useState<null | HTMLElement>(null);
  const [drinkAnchorEl, setDrinkAnchorEl] = useState<null | HTMLElement>(null);

  const handleAppetizerClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAppetizerAnchorEl(event.currentTarget);
  };

  const handleDrinkClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDrinkAnchorEl(event.currentTarget);
  };

  const handleAppletizerClose = () => {
    setAppetizerAnchorEl(null);
  };

  const handleDrinkClose = () => {
    setDrinkAnchorEl(null);
  };

  const DrinkMenu = (
    <Fragment>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        aria-controls="drink-menu"
        aria-haspopup="true"
        onClick={handleDrinkClick}
      >
        <DrinkSVG className={classes.svgStyle} />
      </IconButton>

      <Menu
        id="drink-menu"
        anchorEl={drinkAnchorEl}
        keepMounted
        open={Boolean(drinkAnchorEl)}
        onClose={handleDrinkClose}
        PopoverClasses={{
          paper: classes.menu,
        }}
      >
        <MenuItem onClick={handleDrinkClose}>
          <SodaSVG className={classes.svgStyle} />
          <Typography color="secondary" variant="h6">
            Soft Drinks
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleDrinkClose}>
          <WineSVG className={classes.svgStyle} />
          <Typography color="secondary" variant="h6">
            Wine
          </Typography>
        </MenuItem>
      </Menu>
    </Fragment>
  );

  const AppetizerMenu = (
    <Fragment>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        aria-controls="collapsed-menu"
        aria-haspopup="true"
        onClick={handleAppetizerClick}
      >
        <AppetizerSVG className={classes.svgStyle} />
      </IconButton>

      <Menu
        id="collapsed-menu"
        anchorEl={appetizerAnchorEl}
        keepMounted
        open={Boolean(appetizerAnchorEl)}
        onClose={handleAppletizerClose}
        PopoverClasses={{
          paper: classes.menu,
        }}
      >
        <MenuItem onClick={handleAppletizerClose}>
          <TempuraSVG className={classes.svgStyle} />
          <Typography color="secondary" variant="h6">
            Appetizers
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleAppletizerClose}>
          <NoodleSVG className={classes.svgStyle} />
          <Typography color="secondary" variant="h6">
            Noodles
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleAppletizerClose}>
          <SoupSVG className={classes.svgStyle} />
          <Typography color="secondary" variant="h6">
            Soups
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleAppletizerClose}>
          <SaladSVG className={classes.svgStyle} />
          <Typography color="secondary" variant="h6">
            Salads
          </Typography>
        </MenuItem>
      </Menu>
    </Fragment>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {DrinkMenu}
          {AppetizerMenu}
        </Toolbar>
      </AppBar>
    </div>
  );
}
