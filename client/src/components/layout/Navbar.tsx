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
import { ReactComponent as AppetizerSVG } from "../../img/appetizer.svg";
import { ReactComponent as TempuraSVG } from "../../img/tempura.svg";
import { ReactComponent as NoodleSVG } from "../../img/noodles.svg";
import { ReactComponent as SoupSVG } from "../../img/soups.svg";
import { ReactComponent as SaladSVG } from "../../img/salad.svg";
import { ReactComponent as DrinkSVG } from "../../img/Drinks.svg";
import { ReactComponent as SodaSVG } from "../../img/soda.svg";
import { ReactComponent as BeerSVG } from "../../img/beer.svg";
import { ReactComponent as SakeSVG } from "../../img/sake.svg";
import { ReactComponent as WineSVG } from "../../img/wine.svg";
import { ReactComponent as HomeSVG } from "../../img/home.svg";
import { ReactComponent as NigiriSVG } from "../../img/nigiri.svg";
import { ReactComponent as SushiRollSVG } from "../../img/sushi-rolls.svg";
import { ReactComponent as ExtraSVG } from "../../img/extra.svg";

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
  })
);

export default function Navbar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<{
    drinkEl: null | HTMLElement;
    appetizerEl: null | HTMLElement;
    extraEl: null | HTMLElement;
  }>({
    drinkEl: null,
    appetizerEl: null,
    extraEl: null,
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl({ ...anchorEl, [e.currentTarget.name]: e.currentTarget });

  const handleClose = () => {
    setAnchorEl({
      appetizerEl: null,
      drinkEl: null,
      extraEl: null,
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
            <SodaSVG className={classes.svgStyle} />
            <Typography color="secondary" variant="h6">
              Soft Drinks
            </Typography>
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <IconButton component={Link} to="wine-menu">
            <WineSVG className={classes.svgStyle} />
            <Typography color="secondary" variant="h6">
              Wine
            </Typography>
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <IconButton component={Link} to="beer-menu">
            <BeerSVG className={classes.svgStyle} />
            <Typography color="secondary" variant="h6">
              Beer
            </Typography>
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <IconButton component={Link} to="sake-menu">
            <SakeSVG className={classes.svgStyle} />
            <Typography color="secondary" variant="h6">
              Sake
            </Typography>
          </IconButton>
        </MenuItem>
      </Menu>
    </Fragment>
  );

  const AppetizerMenu = (
    <Fragment>
      <IconButton
        edge="start"
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
          <IconButton component={Link} to="/appetizers">
            <TempuraSVG className={classes.svgStyle} />
            <Typography color="secondary" variant="h6">
              Appetizers
            </Typography>
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <IconButton component={Link} to="noodles">
            <NoodleSVG className={classes.svgStyle} />
            <Typography color="secondary" variant="h6">
              Noodles
            </Typography>
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <IconButton component={Link} to="soups">
            <SoupSVG className={classes.svgStyle} />
            <Typography color="secondary" variant="h6">
              Soups
            </Typography>
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <IconButton component={Link} to="salads">
            <SaladSVG className={classes.svgStyle} />
            <Typography color="secondary" variant="h6">
              Salads
            </Typography>
          </IconButton>
        </MenuItem>
      </Menu>
    </Fragment>
  );

  const SushiMenu = (
    <IconButton edge="start" color="inherit" aria-label="menu">
      <NigiriSVG className={classes.svgStyle} />
    </IconButton>
  );

  const RollMenu = (
    <IconButton edge="start" color="inherit" aria-label="menu">
      <SushiRollSVG className={classes.svgStyle} />
    </IconButton>
  );

  const ExtraMenu = (
    <Fragment>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        aria-controls="collapsed-menu"
        aria-haspopup="true"
        name="extraEl"
        onClick={handleClick}
      >
        <ExtraSVG className={classes.svgStyle} />
      </IconButton>

      <Menu
        id="collapsed-menu"
        anchorEl={anchorEl.extraEl}
        keepMounted
        open={Boolean(anchorEl.extraEl)}
        onClose={handleClose}
        PopoverClasses={{
          paper: classes.menu,
        }}
      >
        <MenuItem onClick={handleClose}>
          <IconButton component={Link} to="/appetizers">
            <Typography color="secondary" variant="h6">
              Desert
            </Typography>
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <IconButton component={Link} to="noodles">
            <Typography color="secondary" variant="h6">
              Extra Items
            </Typography>
          </IconButton>
        </MenuItem>
      </Menu>
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
