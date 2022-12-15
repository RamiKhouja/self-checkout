import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, Platform, Text, View} from 'react-native';

import BarcodeScanner, {
  pauseScanner,
  resumeScanner,
} from 'react-native-barcode-scanner-google';
import {connect} from 'react-redux';

import {searchProductByBarCode} from '../../api/products';
import AddToCartModal from '../../components/AddToCartModal';
import {request, PERMISSIONS} from 'react-native-permissions';
import ConfirmModal from '../../components/ConfirmModal';

import colors from '../../assets/colors';
import style from './style';

const Barcode = ({closeModal, cartList}) => {
  const [data, setData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [permissionResult, setPermissionResult] = useState(false);
  const [toggleConfirm, setToggleConfirm] = useState(false);
  const [quantity, setQuantity] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA,
    ).then(result => {
      if (result === 'granted') setPermissionResult(true);
    });
  }, []);

  useEffect(() => {
    if (!isModalVisible) resumeScanner();
  }, [isModalVisible]);
  const barcodeReceived = async (data, type) => {
    pauseScanner();
    setIsLoading(true);
    const element = cartList.find(item => item.product.sku === data);
    if (typeof element === 'undefined') {
      const result = await searchProductByBarCode({sku: data});
      if (Array.isArray(result)) {
        setData(result[0]);
        setIsModalVisible(true);
      }
    } else {
      setData(element.product);
      setQuantity(element.quantity);
      setIsModalVisible(true);
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <View style={style.container}>
          <Text style={style.addToCartproductName}>Processing</Text>
          <ActivityIndicator size="large" color={colors.LIGHT_GREEN} />
        </View>
      )}
      {permissionResult && (
        <>
          <BarcodeScanner
            style={style.barcodeScreen}
            onBarcodeRead={({data, type}) => barcodeReceived(data, type)}
          />
          <View style={style.frame}>
            <View style={style.frameRow}>
              <Image
                source={require('../../assets/img/scanner/top-left.png')}
                style={style.frameItem}
              />
              <Image
                source={require('../../assets/img/scanner/top-right.png')}
                style={style.frameItem}
              />
            </View>
            <View style={style.frameRow}>
              <Image
                source={require('../../assets/img/scanner/bottom-left.png')}
                style={style.frameItem}
              />
              <Image
                source={require('../../assets/img/scanner/bottom-right.png')}
                style={style.frameItem}
              />
            </View>
          </View>
        </>
      )}
      {data !== null && (
        <AddToCartModal
          scannedProductQuantity={quantity}
          confirmAddToCart={() => setToggleConfirm(true)}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          data={data}
        />
      )}
      <ConfirmModal
        onValidate={() => setToggleConfirm(false)}
        onCancel={() => closeModal()}
        isModalVisible={toggleConfirm}
        setIsModalVisible={setToggleConfirm}
        title={'Product added to cart Successfully !'}
        content={null}
      />
    </>
  );
};
const mapStateToProps = state => {
  return {
    cartList: state.cartReducer.cartList,
  };
};
export default connect(mapStateToProps)(Barcode);
