import React, { Fragment, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button, Hidden, Icon, Menu, MenuItem } from "@material-ui/core";
import { ReactComponent as SushiSVG } from "../../img/sushi (1).svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    svgStyle: {
      fillColor: theme.palette.primary.main,
    },
  })
);

export default function Navbar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const collapseMenu = (
    <Fragment>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        aria-controls="collapsed-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="collapsed-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <img alt="Drink Menu" src={require("../../img/drink-icon.png")} />
          Drinks
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <img alt="Appetizers" src={require("../../img/appetizers.png")} />
          Appetizers
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <SushiSVG style={{ width: "2rem", height: "2rem", fill: "green" }} />
          Sushi
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <img alt="Rolls" src={require("../../img/rolls.png")} />
          Rolls
        </MenuItem>
      </Menu>
    </Fragment>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Hidden>{collapseMenu}</Hidden>
          <Typography variant="h6" className={classes.title}>
            Yama Sushi
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
