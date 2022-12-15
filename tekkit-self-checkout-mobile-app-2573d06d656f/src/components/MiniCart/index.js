import React from 'react';
import {FlatList, View, Text, Image, TouchableOpacity} from 'react-native';
import Card from '../Card';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {globalStyles} from '../../assets/styles';
import style from './style';
import {connect} from 'react-redux';
import PaymentButtons from '../PaymentButtons';
import colors from '../../assets/colors';
import {EMPTY_CART, DELETE_ELEMENT, EDIT_ELEMENT} from '../../redux/actions';
import Counter from '../Counter';
import ConfirmModal from '../ConfirmModal';
import {calculatePrice} from '../../utils/calculatePrice';

function MiniCart({
  cartList,
  navigation,
  onDeleteCart,
  onDeleteElementFromCart,
  onEditProductInList,
  toggleConfirm,
  setToggleConfirm,
}) {
  return (
    <View style={style.minicart}>
      {cartList !== undefined && cartList.length > 0 ? (
        <FlatList
          style={style.list}
          data={cartList}
          keyExtractor={item => item.product.id.toString()}
          renderItem={({item}) => (
            <Card>
              <View style={style.cartCard}>
                <View style={style.cartImageWrapper}>
                  {item.product.images.length > 0 ? (
                    <Image
                      source={{uri: item.product.images[0].src}}
                      style={style.cartCardImage}
                    />
                  ) : (
                    <Image
                      source={{uri: 'https://via.placeholder.com/50x50'}}
                      style={style.cartCardImage}
                    />
                  )}
                </View>
                <View style={style.cartCardContent}>
                  <Text
                    numberOfLines={4}
                    style={[globalStyles.titleText, {width: 200}]}>
                    {item.product.name}
                  </Text>

                  <View style={style.infoContainer}>
                    <Text style={style.miniCartItemPrice}>
                      {calculatePrice(item.product.price * item.quantity)}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        onDeleteElementFromCart(item);
                      }}
                      style={{marginEnd: 10}}>
                      <MaterialIcons
                        name="delete-outline"
                        size={28}
                        color={colors.LIGHT_GREEN}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={style.miniCounterContainer}>
                    <Counter
                      initValue={item.quantity}
                      increment={newQuantity => {
                        onEditProductInList(item, newQuantity);
                      }}
                      decrement={newQuantity =>
                        onEditProductInList(item, newQuantity)
                      }
                    />
                  </View>
                </View>
              </View>
            </Card>
          )}
        />
      ) : (
        <View style={style.emptyView}>
          <Text style={style.textEmpty}>Your Cart is Empty!</Text>
          <Image
            source={require('../../assets/img/empty.png')}
            style={style.imageEmpty}
          />
        </View>
      )}

      <PaymentButtons navigation={navigation} />
      <ConfirmModal
        onValidate={() => {
          onDeleteCart();
          setToggleConfirm(false);
        }}
        onCancel={() => setToggleConfirm(false)}
        isModalVisible={toggleConfirm}
        setIsModalVisible={setToggleConfirm}
        title={'Confirm clear cart List !'}
        content={'Are you sure you want to clean all cart elements'}
      />
    </View>
  );
}

const mapStateToProps = state => {
  return {
    cartList: state.cartReducer.cartList,
    totalPrice: state.cartReducer.totalPrice,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDeleteCart: () => dispatch({type: EMPTY_CART}),
    onDeleteElementFromCart: item =>
      dispatch({
        type: DELETE_ELEMENT,
        payload: {
          id: item.product.id,
          price: calculatePrice(item.product.price),
          quantity: item.quantity,
        },
      }),
    onEditProductInList: (item, newQuantity) =>
      dispatch({
        type: EDIT_ELEMENT,
        payload: {
          id: item.product.id,
          price: calculatePrice(item.product.price),
          quantity: item.quantity,
          newQuantity: newQuantity,
        },
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);
