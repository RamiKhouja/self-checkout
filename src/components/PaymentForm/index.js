import {Text, TextInput} from 'react-native';
import React from 'react';

import {CardField, StripeProvider} from '@stripe/stripe-react-native';
import {PUBLISHABLE_KEY} from '@env';
import style from './style';

const PaymentForm = ({setName, setCardDetails}) => {
  return (
    <>
      <Text style={style.label}>Card Holder Name</Text>
      <TextInput
        placeholder="Joshua Hernandez"
        style={style.input}
        onChangeText={data => setName(data)}
      />
      <StripeProvider publishableKey={PUBLISHABLE_KEY}>
        <CardField
          style={style.carContainer}
          cardStyle={style.input}
          postalCodeEnabled={false}
          onCardChange={data => {
            setCardDetails(data);
          }}
        />
      </StripeProvider>
    </>
  );
};

export default PaymentForm;
