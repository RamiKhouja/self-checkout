import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

// stacks
import HomeStack from './HomeStack';
import CustomDrawer from '../components/Drawer';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="HomeStack" component={HomeStack} />
    </Drawer.Navigator>
  );
}
