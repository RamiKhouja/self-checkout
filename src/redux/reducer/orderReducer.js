import {
  ORDER_SUCCESS,
  ORDER_FAILED,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILED,
  CLEAR_ORDER,
} from '../actions';

const initialState = {
  order: null,
  orders: [],
};

export function orderReducer(state = initialState, action) {
  switch (action.type) {
    case ORDER_SUCCESS:
      return {...state, order: action.order};
    case ORDER_FAILED:
      return state;
    case GET_ORDERS_SUCCESS:
      return {...state, orders: action.orders};
    case GET_ORDERS_FAILED:
      return {...state, error: action.error};
    case CLEAR_ORDER:
      return {...state, order: null};
    default:
      return state;
  }
}
