import React, {useCallback, useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import MiniCart from '../MiniCart';
import CustomModal from '../CustomModal';

import style from './style';
import colors from '../../assets/colors';
import {connect} from 'react-redux';

const CartModal = ({isVisible, setIsVisible, navigation, cartList}) => {
  const [toggleConfirm, setToggleConfirm] = useState(false);
  const [showEmpty, setShowEmpty] = useState(false);
  const toggleEmptyCart = useCallback(() => {
    setShowEmpty(() =>
      cartList !== undefined && cartList.length > 0 ? true : false,
    );
  }, [cartList]);
  useEffect(() => {
    toggleEmptyCart();
  }, [cartList]);

  return (
    <CustomModal
      isModalOpen={isVisible}
      setIsModalOpen={setIsVisible}
      title={'Cart'}
      HeaderComponent={
        showEmpty ? (
          <TouchableOpacity
            style={style.cleanCartWrapper}
            onPress={() => setToggleConfirm(true)}>
            <Text style={{color: colors.DARK_GRAY}}>Empty</Text>
            <MaterialIcons
              name="delete-forever"
              size={28}
              color={colors.DARK_GRAY}
            />
          </TouchableOpacity>
        ) : (
          <Text style={{paddingHorizontal: 12}}></Text>
        )
      }
      Component={
        <MiniCart
          navigation={sceen => {
            setIsVisible(false);
            navigation.navigate(sceen);
          }}
          toggleConfirm={toggleConfirm}
          setToggleConfirm={setToggleConfirm}
        />
      }
    />
  );
};
const mapStateToProps = state => {
  return {
    cartList: state.cartReducer.cartList,
  };
};
export default connect(mapStateToProps)(CartModal);
