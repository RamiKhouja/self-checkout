import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchProducts} from '../../api/products';

import {
  ALL_PRODUCTS_LOADED,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS_SUCCESS,
} from '../actions';

export default function* productsWatcherSaga() {
  yield takeEvery(FETCH_PRODUCTS, fetchProductsWorker);
}
function* fetchProductsWorker(action) {
  try {
    const products = yield call(() => fetchProducts(action.payload.page));
    if (Array.isArray(products)) {
      if (products.length === 0) yield put({type: ALL_PRODUCTS_LOADED});
      else yield put({type: FETCH_PRODUCTS_SUCCESS, products});
    } else {
      yield put({type: FETCH_PRODUCTS_FAILED, message: e.message});
    }
  } catch (e) {
    yield put({type: FETCH_PRODUCTS_FAILED, message: e.message});
  }
}
