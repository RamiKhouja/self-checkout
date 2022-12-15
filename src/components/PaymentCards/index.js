import {View, Image} from 'react-native';
import React from 'react';
import style from './style';

const PaymentCards = () => {
  return (
    <View style={style.imgs}>
      <Image
        source={require('../../assets/img/cards/visa.png')}
        style={style.img}
      />
      <Image
        source={require('../../assets/img/cards/mastercard.png')}
        style={style.img}
      />
      <Image
        source={require('../../assets/img/cards/amex.png')}
        style={style.img}
      />
      <Image
        source={require('../../assets/img/cards/discover.png')}
        style={style.img}
      />
    </View>
  );
};

export default PaymentCards;
