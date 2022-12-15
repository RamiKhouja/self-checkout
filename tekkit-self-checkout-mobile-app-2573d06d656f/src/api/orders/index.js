import WooComAPI from '../WooComAPIprod';

const createOrder = async ({user, cart, payed}) => {
  const cartItems = cart.map(item => ({
    product_id: item.product.id,
    quantity: item.quantity,
  }));

  return await WooComAPI.post('orders', {
    payment_method: 'cod',
    payment_method_title: 'Paiement à la livraison',
    set_paid: payed,
    customer_id: user.id,
    billing: {
      first_name: user.firstName,
      last_name: user.lastName,
      address_1: '3855 St Laurent Blvd',
      address_2: '',
      city: 'Montreal',
      state: 'QC',
      postcode: 'H2W 1X9',
      country: 'CA',
      email: user.email,
      phone: '',
    },
    shipping: {
      first_name: user.firstName,
      last_name: user.lastName,
      address_1: '3855 St Laurent Blvd',
      address_2: '',
      city: 'Montreal',
      state: 'QC',
      postcode: 'H2W 1X9',
      country: 'CA',
    },
    line_items: cartItems,
    shipping_lines: [
      {
        method_title: 'Local pickup',
        method_id: 'local_pickup',
        total: '0.00',
      },
    ],
  });
};

const getOrdersByUser = async user => {
  return await WooComAPI.get('orders', {customer: user.id, per_page: 10});
};

const updateOrder = async order => {
  return await WooComAPI.put(`orders/${order.id}`, {status: order.status});
};

export {createOrder, getOrdersByUser, updateOrder};
