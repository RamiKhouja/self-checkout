import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import style from './style';

import CartModal from '../CartModal';
import colors from '../../assets/colors';
import {connect} from 'react-redux';
import AccountModal from '../AccountModal';

const Header = ({navigation, cartList}) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const openMenu = () => {
    navigation.openDrawer();
  };
  const openAccountModal = () => {
    setAccountOpen(prevState => !prevState);
  };

  let totalQty = 0;
  cartList.forEach(item => {
    totalQty += item.quantity;
  });

  return (
    <View style={style.header}>
      <MaterialIcons
        color={colors.DARK_GRAY}
        name="menu"
        onPress={openMenu}
        size={30}
      />
      <View style={style.headerRight}>
        <TouchableOpacity onPress={openAccountModal}>
          <MaterialIcons
            name="account-circle"
            size={30}
            color={colors.LIGHT_GREEN}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCartOpen(true)}>
          <Ionicons
            name="ios-cart-outline"
            size={30}
            color={colors.LIGHT_GREEN}
          />
          {totalQty > 0 && <Text style={style.cartQty}>{totalQty}</Text>}
        </TouchableOpacity>
      </View>
      <CartModal
        isVisible={cartOpen}
        setIsVisible={setCartOpen}
        navigation={navigation}
      />
      <AccountModal isVisible={accountOpen} setIsVisible={setAccountOpen} />
    </View>
  );
};
const mapStateToProps = state => {
  return {
    cartList: state.cartReducer.cartList,
  };
};
export default connect(mapStateToProps)(Header);
