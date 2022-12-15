import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';

import colors from '../../assets/colors';

import {connect} from 'react-redux';

import style from './style';
import OrderDetailsButtons from '../../components/OrderDetailsButtons';
import OrderItemsList from '../../components/OrderItems';
import OrderInfo from '../../components/OrderInfo';
import {updateOrder} from '../../api/orders';
import {calculatePrice} from '../../utils/calculatePrice';

const OrderDetails = ({route, orderRedux, navigation}) => {
  const [orderCreated, setOrderCreated] = useState();
  const handleUpdateOrder = useCallback(async () => {
    orderCreated.date_paid = orderCreated.date_modified;
    orderCreated.status = 'completed';
    await updateOrder(orderCreated);
  }, []);

  useEffect(() => {
    if (route.params !== undefined) {
      setOrderCreated(
        route.params.order !== null
          ? route.params.order
          : orderRedux !== null
          ? orderRedux
          : null,
      );
    } else {
      setOrderCreated(orderRedux !== null ? orderRedux : null);
    }
  }, [orderRedux, route.params]);

  useEffect(() => {
    if (orderCreated !== null) {
      handleUpdateOrder();
    }
  }, [orderCreated]);
  const [subTotal, setSubTotal] = useState();

  useEffect(() => {
    if (orderCreated != null) {
      setSubTotal(() =>
        calculatePrice(orderCreated.total - orderCreated.total_tax),
      );
    }
  }, [orderCreated]);

  if (orderCreated == null)
    return (
      <View
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color={colors.LIGHT_GREEN} />
      </View>
    );
  else
    return (
      <>
        <ScrollView
          style={{
            backgroundColor: colors.WHITE,
            height: '80%',
          }}
          showsVerticalScrollIndicator={false}>
          <View style={style.container}>
            <Text style={style.darkGray}>
              Hello {orderCreated.billing.first_name},{'\n\n'}
              Thank you for shopping here. Here are some information about your
              order.
            </Text>

            <OrderInfo order={orderCreated} />
            <View style={style.orderInfo}>
              <View style={{...style.infoRow, ...style.bottomBorder}}>
                <Text style={style.bold}>ITEMS</Text>
                <Text style={style.bold}>AMOUNT</Text>
              </View>
              <View style={style.bottomBorder}>
                <OrderItemsList data={orderCreated.line_items} />
              </View>
              <View style={{...style.bottomBorder, paddingTop: 10}}>
                <View style={style.infoRow}>
                  <Text style={style.bold}>Subtotal (CAD)</Text>
                  <Text style={style.bold}>${subTotal}</Text>
                </View>
                {orderCreated.tax_lines.map(tax => (
                  <View style={style.infoRow}>
                    <Text style={style.darkGray}>
                      {tax.label.substr(0, 4)} ({tax.rate_percent}%)
                    </Text>
                    <Text style={style.darkGray}>
                      ${calculatePrice(tax.tax_total)}
                    </Text>
                  </View>
                ))}
              </View>
              <View style={{...style.infoRow, paddingTop: 10}}>
                <Text style={style.bold}>Total (CAD)</Text>

                <Text style={style.bold}>${orderCreated.total}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{backgroundColor: colors.WHITE, height: '10%'}}>
          <OrderDetailsButtons navigation={navigation} />
        </View>
      </>
    );
};

const mapStateToProps = state => {
  return {
    orderRedux: state.orderReducer.order,
  };
};
export default connect(mapStateToProps)(OrderDetails);
