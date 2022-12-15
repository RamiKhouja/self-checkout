import {View, Text} from 'react-native';
import React from 'react';
import style from './style';

const OrderInfo = ({order}) => {
  return (
    <View style={style.orderInfo}>
      <View style={style.infoRow}>
        <Text style={style.darkGray}>Order</Text>
        <Text style={style.darkGray}>#{order.id}</Text>
      </View>
      <View style={style.infoRow}>
        <Text style={style.darkGray}>Bill to</Text>
        <Text style={style.darkGray}>
          {order.billing.first_name} {order.billing.last_name}
        </Text>
      </View>
      <View style={style.infoRow}>
        <Text style={style.darkGray}>Total Amount</Text>
        {order && <Text style={style.darkGray}>${order.total}</Text>}
      </View>
      <View style={style.infoRow}>
        <Text>Payed Via</Text>
        <Text>{order.payment_method_title}</Text>
      </View>
      <View style={style.infoRow}>
        <Text>Payment Date</Text>
        <Text>
          {order.date_paid !== null ? order.date_paid.substring(0, 10) : ''}
        </Text>
      </View>
    </View>
  );
};

export default OrderInfo;
