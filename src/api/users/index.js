import {BASE_URL_DEV} from '@env';
import axios from 'axios';
import WooComAPI from '../WooComAPIprod';

const authUser = ({username, password}) =>
  axios.post(BASE_URL_DEV + '/wp-json/jwt-auth/v1/token', {
    username: username,
    password: password,
  });
const createUser = data =>
  WooComAPI.post('customers', {
    email: data.email,
    first_name: data.firstname,
    last_name: data.lastname,
    username: data.username,
    password: data.password,
  });
function updateUser(data) {
  return WooComAPI.put('customers/' + data.user.id, {
    first_name: data.user.firstname,
    last_name: data.user.lastname,
  });
}
export {authUser, updateUser, createUser};
