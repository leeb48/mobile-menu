import React, { Fragment, useContext, useEffect } from 'react';
import { Store } from '../../store/Store';

// Actions
import { getSake } from '../../store/actions';
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
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.primary.main,
    },
    gridList: {
      width: '100%',
      height: '100%',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  })
);

const SakeMenu = () => {
  const { state, dispatch } = useContext(Store);
  const classes = useStyles();

  useEffect(() => {
    getSake(dispatch);
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
      <GridListTile key='Subheader' cols={2} style={{ height: 'auto' }}>
        <ListSubheader component='div'>
          <Button variant='outlined' color='secondary'>
            Show All
          </Button>
        </ListSubheader>
      </GridListTile>
      <div className={classes.root}>
        <GridList cellHeight={200} cols={1} className={classes.gridList}>
          {renderMenu}
        </GridList>
      </div>
    </Fragment>
  );
};

export default SakeMenu;
