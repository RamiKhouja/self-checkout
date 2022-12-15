import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../assets/colors';
import {connect} from 'react-redux';
import {CREATE_ORDER} from '../../redux/actions';
import {calculatePrice} from '../../utils/calculatePrice';

const PaymentButtons = ({totalPrice, copilot, onCreateOrder, cart, user}) => {
  const handleCreateOrder = (payed, sceen) => {
    onCreateOrder({user, cart, payed, sceen});
  };
  return (
    <View {...copilot} style={style.paymentButtonsContainer}>
      <View style={style.total}>
        <Text style={style.totalText}>Total in cart : </Text>
        <Text style={{...style.totalText, ...style.totalPrice}}>
          $ {calculatePrice(totalPrice)}
        </Text>
      </View>
      <View style={style.actionButtonsContainer}>
        <TouchableOpacity
          disabled={totalPrice === 0 ? true : false}
          onPress={() => handleCreateOrder(false, 'Checkout')}
          style={[
            style.actionButton,
            totalPrice > 0 ? style.actionButton : style.diabledButton,
          ]}>
          <FontAwesome5
            name="coins"
            size={20}
            color={totalPrice > 0 ? colors.WHITE : colors.DARK_GRAY}
            style={{paddingRight: 10}}
          />
          <Text
            style={[
              style.payText,
              totalPrice === 0 ? {color: colors.DARK_GRAY} : null,
            ]}>
            Pay in Store
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            style.actionButton,
            style.actionButtonOutline,
            !totalPrice ? style.diabledButton : null,
          ]}
          disabled={totalPrice === 0 ? true : false}
          onPress={() => {
            handleCreateOrder(false, 'Payment');
          }}>
          <MaterialIcons
            name="payment"
            size={22}
            color={totalPrice > 0 ? colors.LIGHT_GREEN : colors.DARK_GRAY}
            style={{paddingRight: 10}}
          />
          <Text
            style={[
              style.payTextOutline,
              totalPrice === 0 ? {color: colors.DARK_GRAY} : null,
            ]}>
            Credit Card
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    totalPrice: state.cartReducer.totalPrice,
    order: state.orderReducer.order,
    cart: state.cartReducer.cartList,
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCreateOrder: orderCreated => {
      dispatch({type: CREATE_ORDER, payload: orderCreated});
      ownProps.navigation(orderCreated.sceen);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentButtons);
