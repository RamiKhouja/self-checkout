import React, {useState} from 'react';
import {View, Text, Button, ActivityIndicator} from 'react-native';

import {useConfirmPayment} from '@stripe/stripe-react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import colors from '../../assets/colors';

import style from './style';
import {fetchPaymentIntentClientSecret} from '../../api/payment';
import ConfirmModal from '../../components/ConfirmModal';
import {EMPTY_CART} from '../../redux/actions';
import PaymentCards from '../../components/PaymentCards';
import PaymentForm from '../../components/PaymentForm';
const Payment = ({navigation, order, totalPrice, emptyCard}) => {
  const [name, setName] = useState();
  const [cardDetails, setCardDetails] = useState();
  const {confirmPayment, loading} = useConfirmPayment();
  const [isPaymentError, setErrorPayment] = useState(false);

  const handlePayment = () => {
    fetchPaymentIntentClientSecret(cardDetails, totalPrice).then(clientSecret =>
      confirmPayment(clientSecret, {
        type: 'Card',
        billingDetails: {name},
      }).then(({paymentIntent}) => {
        if (paymentIntent !== undefined) {
          if (paymentIntent.status === 'Succeeded') {
            emptyCard();
            navigation.navigate('OrderDetails', {order: null});
          }
        } else {
          setErrorPayment(true);
        }
      }),
    );
  };

  return (
    <View style={style.container}>
      <>
        <View style={style.titleBlock}>
          <MaterialIcons
            name="payments"
            size={18}
            color="#333"
            style={{marginTop: 4}}
          />
          <Text style={style.title}>Payment Details</Text>
        </View>
        <View style={style.details}>
          <PaymentCards />
          <PaymentForm setCardDetails={setCardDetails} setName={setName} />
        </View>
        <View style={style.button}>
          {order !== null &&
            order !== undefined &&
            (loading === false ? (
              <Button
                title="Pay"
                color={colors.LIGHT_GREEN}
                onPress={handlePayment}
                disabled={
                  cardDetails !== undefined
                    ? 'complete' in cardDetails
                      ? !cardDetails.complete
                      : true
                    : true
                }
              />
            ) : (
              <ActivityIndicator size="large" color={colors.LIGHT_GREEN} />
            ))}
        </View>
      </>
      {isPaymentError && (
        <ConfirmModal
          title={'Payment failed'}
          content={`Payment failed please check you're card informations`}
          isModalVisible={isPaymentError}
          setIsModalVisible={setErrorPayment}
          onCancel={() => setErrorPayment(false)}
        />
      )}
    </View>
  );
};
const mapStateToProps = state => {
  return {
    order: state.orderReducer.order,
    user: state.userReducer.user,
    totalPrice: state.cartReducer.totalPrice,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    emptyCard: () => dispatch({type: EMPTY_CART}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
