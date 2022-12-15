import {combineReducers} from 'redux';
import {productReducer} from './productReducer';
import {userReducer} from './userReducer';
import {cartReducer} from './cartReducer';
import {orderReducer} from './orderReducer';

const reducers = combineReducers({
  productReducer,
  userReducer,
  cartReducer,
  orderReducer
});
export default reducers;
