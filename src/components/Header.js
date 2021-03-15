import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../reducers/products';
import { getSortedProducts } from '../reducers/sort';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header(props) {
  const { products } = useSelector((state) => ({
    products: state.products.products,
  }));

  const dispatch = useDispatch();
  const classes = useStyles();
  const { storename } = props;
  const reloadProduct = (event) => {
    event.preventDefault();
    dispatch(getProducts());
    dispatch(getSortedProducts(null, null, false));
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {storename}
          </Typography>
          <Button color="inherit" onClick={reloadProduct}>
            Reload Products
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
