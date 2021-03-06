import React, { Fragment, useState } from "react";

// Router Imports
import { Link } from "react-router-dom";

// Material UI Imports
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Menu, MenuItem } from "@material-ui/core";

// SVG Imports
import { ReactComponent as TempuraSVG } from "../../img/tempura.svg";
import { ReactComponent as DrinkSVG } from "../../img/Drinks.svg";
import { ReactComponent as SodaSVG } from "../../img/soda.svg";
import { ReactComponent as BeerSVG } from "../../img/beer.svg";
import { ReactComponent as SakeSVG } from "../../img/sake.svg";
import { ReactComponent as WineSVG } from "../../img/wine.svg";
import { ReactComponent as HomeSVG } from "../../img/home.svg";
import { ReactComponent as NigiriSVG } from "../../img/nigiri.svg";
import { ReactComponent as SushiRollSVG } from "../../img/sushi-rolls.svg";
import { ReactComponent as ExtraSVG } from "../../img/extra.svg";
import { ReactComponent as Plus } from "../../img/plus.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    menu: {
      backgroundColor: theme.palette.primary.main,
    },
    title: {
      flexGrow: 1,
    },
    svgStyle: {
      fill: theme.palette.secondary.main,
      [theme.breakpoints.down("xs")]: {
        width: "2rem",
        height: "2rem",
      },
      [theme.breakpoints.up("sm")]: {
        width: "3rem",
        height: "3rem",
      },
      [theme.breakpoints.up("lg")]: {
        width: "4rem",
        height: "4rem",
      },
    },

    svgStyle2: {
      fill: theme.palette.secondary.main,
      [theme.breakpoints.down("xs")]: {
        width: "1.5rem",
        height: "1.5rem",
      },
      [theme.breakpoints.up("sm")]: {
        width: "2rem",
        height: "2rem",
      },

      [theme.breakpoints.up("lg")]: {
        width: "3rem",
        height: "3rem",
      },
    },

    subSvg: {
      marginRight: "10px",
    },
  })
);

export default function Navbar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<{
    drinkEl: null | HTMLElement;
    appetizerEl: null | HTMLElement;
    rollEl: null | HTMLElement;
  }>({
    drinkEl: null,
    appetizerEl: null,
    rollEl: null,
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl({ ...anchorEl, [e.currentTarget.name]: e.currentTarget });

  const handleClose = () => {
    setAnchorEl({
      appetizerEl: null,
      drinkEl: null,
      rollEl: null,
    });
  };

  const DrinkMenu = (
    <Fragment>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        aria-controls="drink-menu"
        aria-haspopup="true"
        name="drinkEl"
        onClick={handleClick}
      >
        <DrinkSVG className={classes.svgStyle2} />
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
          <IconButton component={Link} to="soft-drinks">
            <SodaSVG className={`${classes.svgStyle} ${classes.subSvg}`} />
            <Typography color="secondary" variant="h6">
              Soft Drinks
            </Typography>
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <IconButton component={Link} to="wine-menu">
            <WineSVG className={`${classes.svgStyle} ${classes.subSvg}`} />
            <Typography color="secondary" variant="h6">
              Wine
            </Typography>
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <IconButton component={Link} to="beer-menu">
            <BeerSVG className={`${classes.svgStyle} ${classes.subSvg}`} />
            <Typography color="secondary" variant="h6">
              Beer
            </Typography>
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <IconButton component={Link} to="sake-menu">
            <SakeSVG className={`${classes.svgStyle} ${classes.subSvg}`} />
            <Typography color="secondary" variant="h6">
              Sake
            </Typography>
          </IconButton>
        </MenuItem>
      </Menu>
    </Fragment>
  );

  const AppetizerMenu = (
    <IconButton
      component={Link}
      to="appetizer-menu"
      edge="start"
      color="inherit"
      aria-label="menu"
    >
      <TempuraSVG className={classes.svgStyle} />
    </IconButton>
  );

  const SushiMenu = (
    <IconButton
      component={Link}
      to="nigiri-menu"
      edge="start"
      color="inherit"
      aria-label="menu"
    >
      <NigiriSVG className={classes.svgStyle} />
    </IconButton>
  );

  const RollMenu = (
    <Fragment>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        aria-controls="roll-menu"
        aria-haspopup="true"
        name="rollEl"
        onClick={handleClick}
      >
        <SushiRollSVG className={classes.svgStyle} />
      </IconButton>

      <Menu
        id="rollEl"
        anchorEl={anchorEl.rollEl}
        keepMounted
        open={Boolean(anchorEl.rollEl)}
        onClose={handleClose}
        PopoverClasses={{
          paper: classes.menu,
        }}
      >
        <MenuItem onClick={handleClose}>
          <IconButton component={Link} to="special-rolls-menu">
            <Plus className={`${classes.svgStyle2} ${classes.subSvg}`} />
            <Typography color="secondary" variant="h6">
              Special Rolls
            </Typography>
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <IconButton component={Link} to="hand-or-cut-rolls-menu">
            <Plus className={`${classes.svgStyle2} ${classes.subSvg}`} />
            <Typography color="secondary" variant="h6">
              Hand Rolls &amp; Cut Rolls
            </Typography>
          </IconButton>
        </MenuItem>
      </Menu>
    </Fragment>
  );

  const ExtraMenu = (
    <Fragment>
      <IconButton component={Link} to="extra-menu" edge="start" color="inherit">
        <ExtraSVG className={classes.svgStyle} />
      </IconButton>
    </Fragment>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton component={Link} to="/">
            <HomeSVG className={classes.svgStyle2} />
          </IconButton>
          {DrinkMenu}
          {AppetizerMenu}
          {SushiMenu}
          {RollMenu}
          {ExtraMenu}
        </Toolbar>
      </AppBar>
    </div>
  );
}
