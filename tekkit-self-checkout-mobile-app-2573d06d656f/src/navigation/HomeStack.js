import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Home from '../sceens/Home';
import ProductDetails from '../sceens/ProductDetails';
import Payment from '../sceens/Payment';
import colors from '../assets/colors';
import Header from '../components/Header';
import Checkout from '../sceens/Checkout';
import Orders from '../sceens/Orders';
import Contact from '../sceens/Contact';
import OrderDetails from '../sceens/OrderDetails';
import HowToUse from '../sceens/HowToUse';

const Stack = createStackNavigator();

export default function HomeStack({props}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: true,
          header: props => <Header {...props} />,
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'ProductDetails',
          headerStyle: {
            backgroundColor: colors.LIGHT_GRAY,
          },
          headerTintColor: colors.LIGHT_BLACK,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="ProductDetails"
        component={ProductDetails}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Payment',
          headerStyle: {
            backgroundColor: colors.LIGHT_GRAY,
          },
          headerTintColor: colors.LIGHT_BLACK,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="Payment"
        component={Payment}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Checkout',
          headerStyle: {
            backgroundColor: colors.LIGHT_GRAY,
          },
          headerTintColor: colors.LIGHT_BLACK,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="Checkout"
        component={Checkout}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'My Orders',
          headerStyle: {
            backgroundColor: colors.LIGHT_GRAY,
          },
          headerTintColor: colors.LIGHT_BLACK,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="Orders"
        component={Orders}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Order Details',
          headerLeft: null,
          headerStyle: {
            backgroundColor: colors.LIGHT_GRAY,
          },
          headerTintColor: colors.LIGHT_BLACK,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="OrderDetails"
        component={OrderDetails}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Contact us',
          headerStyle: {
            backgroundColor: colors.LIGHT_GRAY,
          },
          headerTintColor: colors.LIGHT_BLACK,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="Contact"
        component={Contact}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'How to use',
          headerStyle: {
            backgroundColor: colors.LIGHT_GRAY,
          },
          headerTintColor: colors.LIGHT_BLACK,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="HowToUse"
        component={HowToUse}
      />
    </Stack.Navigator>
  );
}
