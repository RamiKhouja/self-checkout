import {DrawerContentScrollView} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import style from './style';
import {connect} from 'react-redux';
import {AUTH_DISCONNECT} from '../../redux/actions';
import DrawerRow from '../DrawerRow';

const CustomDrawer = props => {
  const onLogout = () => props.logOut();

  useEffect(() => {
    if (props.user === null) {
      props.navigation.navigate('Login');
    }
  }, [props.user]);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <DrawerContentScrollView style={{marginTop: -5}} {...props}>
        <View style={style.drawerHeaderContainer}>
          <Image
            source={require('../../assets/img/sclogo.png')}
            style={style.drawerAvatar}
            resizeMode="contain"
          />
        </View>
        <View style={style.drawerContentContainer}>
          <DrawerRow
            type={'MaterialCommunityIcons'}
            name={'shopping'}
            title={'My Orders'}
            callBack={() => props.navigation.navigate('Orders')}
          />

          <DrawerRow
            type={'MaterialCommunityIcons'}
            name={'information-outline'}
            title={'How to use'}
            callBack={() => props.navigation.navigate('HowToUse')}
          />
          <DrawerRow
            type={'MaterialIcons'}
            name={'contact-phone'}
            title={'Contact us'}
            callBack={() => props.navigation.navigate('Contact')}
          />
          <DrawerRow
            name={'logout'}
            title={'Log out'}
            callBack={() => {
              props.navigation.closeDrawer();
              onLogout();
            }}
          />
        </View>
      </DrawerContentScrollView>
      <View style={style.drawerBottom}>
        <View style={style.poweredSection}>
          <Text style={style.poweredText}>Powered by</Text>
          <Image
            source={require('../../assets/img/oncode-logo.png')}
            style={style.oncodeLogo}
            resizeMode="contain"
          />
        </View>
        
        <Text style={style.version}>Version 1.1</Text>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {user: state.userReducer.user};
};
const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch({type: AUTH_DISCONNECT}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
