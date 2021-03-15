import { call, put } from 'redux-saga/effects';
import { setSortedProducts, setSortField } from '../../reducers/sort';
import { getSortedProducts } from '../requests/sortProducts';

export function* handleGetSortedProducts(action) {
  try {
    if (!action.field && !action.products && !action.isDescending) {
      yield put(setSortedProducts(null, null, null));
    }
    const response = yield call(
      getSortedProducts,
      action.field,
      action.products,
      action.isDescending
    );
    const { data } = response;
    yield put(setSortedProducts(action.field, data, action.isDescending));
  } catch (error) {
    console.log(error);
  }
}

export function* handleSetSortField(action) {
  try {
    yield put(setSortField(action.field));
  } catch (error) {
    console.log(error);
  }
}
