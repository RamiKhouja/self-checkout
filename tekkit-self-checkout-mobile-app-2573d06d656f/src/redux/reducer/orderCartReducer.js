import {
  INCREMENT_ORDER_ITEM_PRICE,
  REMOVE_FROM_ORDER_CART,
  MODIFY_ORDER_PRODUCT,
  CLEAR_ORDER_CART
} from '../actions';

const initialState = {
  orderCartList: [],
  totalPrice: 0,
};

export function orderCartReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_ORDER_ITEM_PRICE:
      if (action.product)
        return {
          ...state,
          orderCartList: [
            ...state.orderCartList,
            {product: action.product.data, quantity: action.product.quantity},
          ],
          totalPrice:
            state.totalPrice +
            parseFloat(action.product.data.price) * action.product.quantity,
        };
    case CLEAR_ORDER_CART:
      return {
        ...state,
        orderCartList: [],
        totalPrice: 0,
      };
    case REMOVE_FROM_ORDER_CART:
      return {
        ...state,
        orderCartList: action.payload.orderCartList,
        totalPrice: action.payload.totalPrice,
      };
    case MODIFY_ORDER_PRODUCT:
      return {
        ...state,
        orderCartList: action.payload.orderCartList,
        totalPrice: action.payload.totalPrice,
      };
    default:
      return state;
  }
}
