import WooComAPI from '../WooComAPIprod';

function fetchProducts(page) {
  return WooComAPI.get('products', {per_page: 10, page});
}
function searchProductByBarCode(sku) {
  return WooComAPI.get('products', sku);
}
function fetchProductsByWord(word) {
  return WooComAPI.get('products', {search: word});
}

export {fetchProducts, searchProductByBarCode, fetchProductsByWord};
