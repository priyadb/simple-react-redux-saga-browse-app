import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../reducers/products';
import Header from './Header';
import ProductList from './ProductList';
import ProductSort from './ProductSort';

export default function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="app">
      <Header storename="My TV Store!" />
      <ProductSort />
      <ProductList />
    </div>
  );
}
