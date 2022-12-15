import {put, takeEvery} from 'redux-saga/effects';

import {
  DELETE_ORDER_ELEMENT,
  EDIT_ORDER_ELEMENT,
  ADD_TO_ORDER_CART,
  REMOVE_FROM_ORDER_CART,
  INCREMENT_ORDER_ITEM_PRICE,
  MODIFY_ORDER_PRODUCT,
  CLEAR_ORDER_CART,
  EMPTY_ORDER_CART
} from '../actions';
import {store} from '../store';

export default function* cartWatcherSaga() {
  yield takeEvery(ADD_TO_ORDER_CART, addToCartWorker);
  yield takeEvery(DELETE_ORDER_ELEMENT, deleteElementFromCartWorker);
  yield takeEvery(EDIT_ORDER_ELEMENT, updateElementFromCartWorker);
  yield takeEvery(EMPTY_ORDER_CART, deleteCartWorker);
}
function* addToCartWorker(action) {
  try {
    yield put({type: INCREMENT_ORDER_ITEM_PRICE, product: action.payload.product});
  } catch (e) {
    console.log('error add to cart', e);
  }
}
function* deleteCartWorker() {
  try {
    yield put({type: CLEAR_ORDER_CART});
  } catch (e) {
    console.log('error delete cart', e);
  }
}
function* deleteElementFromCartWorker({payload}) {
  try {
    const {orderCartList, totalPrice} = store.getState().orderCartReducer;

    let result = orderCartList.filter(element => element.product.id !== payload.id);
    const priceProduct = parseFloat(payload.price) * payload.quantity;
    const newPrice =
      totalPrice - priceProduct >= 0 ? totalPrice - priceProduct : 0;

    yield put({
      type: REMOVE_FROM_ORDER_CART,
      payload: {orderCartList: result, totalPrice: newPrice},
    });
  } catch (e) {
    console.log('error delete cart', e);
  }
}
function* updateElementFromCartWorker({payload}) {
  try {
    const {orderCartList, totalPrice} = store.getState().orderCartReducer;
    let result = orderCartList.findIndex(
      element => element.product.id === payload.id,
    );
    const oldPrice = parseFloat(payload.price) * payload.quantity;
    const priceProduct = parseFloat(payload.price) * payload.newQuantity;
    orderCartList[result].quantity = payload.newQuantity;
    yield put({
      type: MODIFY_ORDER_PRODUCT,
      payload: {orderCartList, totalPrice: totalPrice - oldPrice + priceProduct},
    });
  } catch (e) {
    console.log('error delete cart', e);
  }
}
