import {
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_LOADED,
} from '../actions';

const initialState = {
  products: [],
  allLoaded: false,
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {...state, products: [...state.products, ...action.products]};

    case FETCH_PRODUCTS_FAILED:
      return {...state, error: action.error};
    case ALL_PRODUCTS_LOADED:
      return {...state, allLoaded: true};
    default:
      return state;
  }
}
