import WooCommerceAPI from 'react-native-woocommerce-api';

import {BASE_URL_DEV, CONSUMER_KEY_DEV, CONSUMER_SECRET_DEV} from '@env';

const WooComAPI = new WooCommerceAPI({
  url: BASE_URL_DEV, // Your store URL
  ssl: true,
  consumerKey: CONSUMER_KEY_DEV, // Your consumer secret
  consumerSecret: CONSUMER_SECRET_DEV, // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: 'wc/v3', // WooCommerce WP REST API version
  queryStringAuth: true,
});
export default WooComAPI;
