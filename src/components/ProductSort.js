import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Container from '@material-ui/core/Container';
import '../styles/Sort.css';
import { getSortedProducts } from '../reducers/sort';
import { getProducts } from '../reducers/products';

export default function ProductSort(props) {
  let { products, selectedSortOption } = useSelector((state) => ({
    products: state.products.products,
    selectedSortOption: state.products.selectedSortOption,
  }));

  const { sortField, isDescending } = useSelector((state) => ({
    sortField: state.sort.field,
    isDescending: state.sort.isDescending,
  }));

  if (sortField) {
    console.log(sortField);
    selectedSortOption = `${sortField}-${isDescending ? 'desc' : 'asc'}`;
  }

  const dispatch = useDispatch();

  const handleSortChange = (event) => {
    event.preventDefault();
    switch (event.target.value) {
      case 'price-asc':
        dispatch(getSortedProducts('price', products, false));
        break;
      case 'price-desc':
        dispatch(getSortedProducts('price', products, true));
        break;
      case 'name-asc':
        dispatch(getSortedProducts('name', products, false));
        break;
      case 'none':
        dispatch(getProducts());
        dispatch(getSortedProducts(null, null, false));
        break;
      default:
        break;
    }
  };
  return (
    <div className="sort">
      <Container maxWidth="sm" alignItems="center" justify="center">
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-age-native-simple">
            Select Sort Option
          </InputLabel>
          <Select
            native
            value={selectedSortOption}
            onChange={handleSortChange}
            label="Select Sort Option"
            inputProps={{
              name: 'sortOption',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="none">
              Select Sort Option
            </option>
            <option value="price-asc">Sort By Price Asc</option>
            <option value="price-desc">Sort By Price Desc</option>
            <option value="name-asc">Sort By Title</option>
          </Select>
        </FormControl>
      </Container>
    </div>
  );
}
