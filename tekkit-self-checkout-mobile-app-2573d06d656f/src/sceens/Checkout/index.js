import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {connect} from 'react-redux';
import {BASE_URL_DEV} from '@env';
import style from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../assets/colors';
import {updateOrder} from '../../api/orders';
import {EMPTY_CART} from '../../redux/actions';

const Checkout = ({order, navigation, emptyCard}) => {
  const [orderLink, setOrderLink] = useState('');
  const [payed, setPayed] = useState(false);
  let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';

  useEffect(() => {
    if (order !== null) {
      setOrderLink(
        BASE_URL_DEV + '/wp-admin/post.php?post=' + order.id + '&action=edit',
      );
      order.status = 'completed';
      order.date_paid = order.date_modified;

      updateOrder(order);
      setTimeout(() => {
        setPayed(true);
      }, 2500);
    }
  }, [order]);

  useEffect(() => {
    if (payed) {
      emptyCard();
      navigation.navigate('OrderDetails');
    }
  }, [payed]);
  if (payed === false)
    return (
      <View style={style.container}>
        <MaterialIcons name="favorite" color={colors.LIGHT_GREEN} size={24} />
        <Text style={style.checkoutTitle}>
          {payed
            ? 'Thanks for shopping here'
            : 'Please show the QR code to the Cashier'}
        </Text>
        {orderLink !== '' ? (
          <QRCode
            value={orderLink}
            logo={{uri: base64Logo}}
            logoSize={100}
            logoBackgroundColor="transparent"
          />
        ) : (
          <Text>Generating QR Code ...</Text>
        )}
        <Text style={style.checkoutText}>
          Scan this QR Code in the store checkout and get your items.
        </Text>
      </View>
    );
  else
    return (
      <View style={style.spinnerContainer}>
        <ActivityIndicator size="large" color={colors.LIGHT_GREEN} />
      </View>
    );
};

const mapStateToProps = state => {
  return {
    order: state.orderReducer.order,
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    emptyCard: () => dispatch({type: EMPTY_CART}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
