import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Product from './Product';
import '../styles/ProductList.css';

export default function ProductList() {
  const { products } = useSelector(state => state.products);
  if (!products) {
    return null;
  }
  return (
    <div className="products">
      <div className="root">
        <Grid container alignItems="center" justify="center" spacing={1}>
          {Object.keys(products).map((key) => (
            <Grid key={key} item xs={8} sm={3} md={3}>
              <Product key={key} index={key} details={products[key]} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
