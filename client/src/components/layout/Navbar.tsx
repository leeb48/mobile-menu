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
    root: {},
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

  const [anchorEl, setAnchorEl] = useState<{
    drinkEl: null | HTMLElement;
    appetizerEl: null | HTMLElement;
  }>({
    drinkEl: null,
    appetizerEl: null,
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl({ ...anchorEl, [e.currentTarget.name]: e.currentTarget });

  const handleClose = () => {
    setAnchorEl({
      appetizerEl: null,
      drinkEl: null,
    });
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
        name="drinkEl"
        onClick={handleClick}
      >
        <DrinkSVG className={classes.svgStyle} />
      </IconButton>

      <Menu
        id="drinkEl"
        anchorEl={anchorEl.drinkEl}
        keepMounted
        open={Boolean(anchorEl.drinkEl)}
        onClose={handleClose}
        PopoverClasses={{
          paper: classes.menu,
        }}
      >
        <MenuItem onClick={handleClose}>
          <SodaSVG className={classes.svgStyle} />
          <Typography color="secondary" variant="h6">
            Soft Drinks
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
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
        name="appetizerEl"
        onClick={handleClick}
      >
        <AppetizerSVG className={classes.svgStyle} />
      </IconButton>

      <Menu
        id="collapsed-menu"
        anchorEl={anchorEl.appetizerEl}
        keepMounted
        open={Boolean(anchorEl.appetizerEl)}
        onClose={handleClose}
        PopoverClasses={{
          paper: classes.menu,
        }}
      >
        <MenuItem onClick={handleClose}>
          <TempuraSVG className={classes.svgStyle} />
          <Typography color="secondary" variant="h6">
            Appetizers
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NoodleSVG className={classes.svgStyle} />
          <Typography color="secondary" variant="h6">
            Noodles
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <SoupSVG className={classes.svgStyle} />
          <Typography color="secondary" variant="h6">
            Soups
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
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
