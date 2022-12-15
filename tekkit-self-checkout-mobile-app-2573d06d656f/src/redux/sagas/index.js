import {all} from 'redux-saga/effects';

import productSaga from './productSaga';
import userSaga from './userSaga';
import cartSaga from './cartSaga';
import orderSaga from './orderSaga';

export default function* rootSaga() {
  const result = yield all([
    productSaga(),
    userSaga(),
    cartSaga(),
    orderSaga(),
  ]);
}
