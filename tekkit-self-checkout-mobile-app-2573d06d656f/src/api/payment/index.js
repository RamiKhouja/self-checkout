import {PAYMENT_URL} from '@env';

const fetchPaymentIntentClientSecret = async (cardDetails, totalPrice) => {
  const response = await fetch(PAYMENT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      cardDetails,
      paymentMethodType: 'card',
      charge: '' + totalPrice,
    }),
  });
  const {clientSecret} = await response.json();

  return clientSecret;
};
export {fetchPaymentIntentClientSecret};
