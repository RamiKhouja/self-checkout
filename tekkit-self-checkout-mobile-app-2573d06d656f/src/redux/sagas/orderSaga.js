import {call, put, takeEvery} from 'redux-saga/effects';
import {createOrder, getOrdersByUser} from '../../api/orders';

import {
  CREATE_ORDER,
  ORDER_SUCCESS,
  ORDER_FAILED,
  GET_ORDERS,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILED,
  FINISH_ORDER,
  CLEAR_ORDER,
} from '../actions';

export default function* createOrderWatcherSaga() {
  yield takeEvery(CREATE_ORDER, createOrderWorker);
  yield takeEvery(GET_ORDERS, getUserOrdersWorker);
  yield takeEvery(FINISH_ORDER, clearOrderWorker);
}

function* clearOrderWorker() {
  try {
    yield put({type: CLEAR_ORDER});
  } catch (e) {
    yield put({type: ORDER_FAILED, error: e.message});
  }
}

function* createOrderWorker(action) {
  try {
    const order = yield call(() => createOrder(action.payload));
    yield put({type: ORDER_SUCCESS, order});
  } catch (e) {
    yield put({type: ORDER_FAILED, error: e.message});
  }
}
function* getUserOrdersWorker(action) {
  try {
    const orders = yield call(() => getOrdersByUser(action.payload.user));
    if (Array.isArray(orders)) {
      yield put({type: GET_ORDERS_SUCCESS, orders});
    } else {
      yield put({type: GET_ORDERS_FAILED});
    }
  } catch (e) {
    yield put({type: GET_ORDERS_FAILED, message: e.message});
  }
}
