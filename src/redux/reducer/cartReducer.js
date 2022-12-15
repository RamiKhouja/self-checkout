/* eslint-disable no-fallthrough */
import {REHYDRATE} from 'redux-persist/es/constants';
import {calculatePrice} from '../../utils/calculatePrice';
import {
  INCREMENT_PRICE,
  CLEAR_CART,
  REMOVE_FROM_CART,
  MODIFY_PRODUCT,
} from '../actions';

const initialState = {
  cartList: [],
  totalPrice: 0,
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE:
      if (action.payload !== undefined)
        return {
          ...state,
          cartList: action.payload.cartReducer.cartList,
          totalPrice: action.payload.cartReducer.totalPrice,
        };
    case INCREMENT_PRICE:
      if (action.product) {
        const total =
          parseFloat(action.product.data.price) * action.product.quantity;
        const price = calculatePrice(total);
        return {
          ...state,
          cartList: [
            ...state.cartList,
            {product: action.product.data, quantity: action.product.quantity},
          ],
          totalPrice: state.totalPrice + price,
        };
      }
    case CLEAR_CART:
      return {
        ...state,
        cartList: [],
        totalPrice: 0,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartList: action.payload.cartList,
        totalPrice: action.payload.totalPrice,
      };
    case MODIFY_PRODUCT:
      return {
        ...state,
        cartList: action.payload.cartList,
        totalPrice: action.payload.totalPrice,
      };
    default:
      return state;
  }
}
