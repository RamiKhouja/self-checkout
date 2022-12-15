import {put, takeEvery} from 'redux-saga/effects';

import {
  ADD_TO_CART,
  EMPTY_CART,
  INCREMENT_PRICE,
  CLEAR_CART,
  REMOVE_FROM_CART,
  DELETE_ELEMENT,
  EDIT_ELEMENT,
  MODIFY_PRODUCT,
} from '../actions';
import {store} from '../store';

export default function* cartWatcherSaga() {
  yield takeEvery(ADD_TO_CART, addToCartWorker);
  yield takeEvery(EMPTY_CART, deleteCartWorker);
  yield takeEvery(DELETE_ELEMENT, deleteElementFromCartWorker);
  yield takeEvery(EDIT_ELEMENT, updateElementFromCartWorker);
}
function* addToCartWorker(action) {
  try {
    yield put({type: INCREMENT_PRICE, product: action.payload.product});
  } catch (e) {
    console.log('error add to cart', e);
  }
}
function* deleteCartWorker() {
  try {
    yield put({type: CLEAR_CART});
  } catch (e) {
    console.log('error delete cart', e);
  }
}
function* deleteElementFromCartWorker({payload}) {
  try {
    const {cartList, totalPrice} = store.getState().cartReducer;

    let result = cartList.filter(element => element.product.id !== payload.id);
    const priceProduct = parseFloat(payload.price) * payload.quantity;
    const newPrice =
      totalPrice - priceProduct >= 0 ? totalPrice - priceProduct : 0;

    yield put({
      type: REMOVE_FROM_CART,
      payload: {cartList: result, totalPrice: newPrice},
    });
  } catch (e) {
    console.log('error delete cart', e);
  }
}
function* updateElementFromCartWorker({payload}) {
  try {
    const {cartList, totalPrice} = store.getState().cartReducer;
    let result = cartList.findIndex(
      element => element.product.id === payload.id,
    );
    const oldPrice = parseFloat(payload.price) * payload.quantity;
    const priceProduct = parseFloat(payload.price) * payload.newQuantity;
    cartList[result].quantity = payload.newQuantity;
    yield put({
      type: MODIFY_PRODUCT,
      payload: {cartList, totalPrice: totalPrice - oldPrice + priceProduct},
    });
  } catch (e) {
    console.log('error delete cart', e);
  }
}
