import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Navigator from './drawer';
import Login from '../sceens/Login';
import ForgetPassword from '../sceens/ForgetPassword';
import Signup from '../sceens/Signup';
import OnBoardingSwiper from '../sceens/OnBoardingSwiper';
import ProtectedNavigation from '../sceens/ProtectedNavigation';
import {connect} from 'react-redux';

const Stack = createStackNavigator();
function DefaultStack({user}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {user === undefined && (
        <Stack.Screen name="onBoarding" component={OnBoardingSwiper} />
      )}
      <Stack.Screen name="protectedSceen" component={ProtectedNavigation} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="HomeNavigator" component={Navigator} />
    </Stack.Navigator>
  );
}
const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
  };
};
export default connect(mapStateToProps)(DefaultStack);
