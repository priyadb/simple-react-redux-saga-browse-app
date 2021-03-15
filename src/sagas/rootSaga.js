import { takeLatest } from 'redux-saga/effects';
import { GET_PRODUCTS } from '../reducers/products';
import { GET_SORTED_PRODUCTS, SET_SORT_FIELD } from '../reducers/sort';
import { handleGetProducts } from './handlers/products';
import {
  handleGetSortedProducts,
  handleSetSortField,
} from './handlers/sortedProducts';

export function* watcherSaga() {
  yield takeLatest(GET_PRODUCTS, handleGetProducts);
  yield takeLatest(GET_SORTED_PRODUCTS, handleGetSortedProducts);
  yield takeLatest(SET_SORT_FIELD, handleSetSortField);
}
