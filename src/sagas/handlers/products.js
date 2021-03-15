import { call, put } from 'redux-saga/effects';
import { getProducts } from '../requests/products';
import { setProducts } from '../../reducers/products';

export function* handleGetProducts(action) {
  try {
    const response = yield call(getProducts);
    const { data } = response;
    yield put(setProducts(data));
  } catch (error) {
    console.log(error);
  }
}
