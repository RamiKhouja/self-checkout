import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../assets/colors';
import style from './style';
import {connect} from 'react-redux';
import {FINISH_ORDER} from '../../redux/actions';
const OrderDetailsButtons = ({navigation, onClearOrder}) => {
  return (
    <View style={style.infoRowAround}>
      <TouchableOpacity
        style={{
          ...style.button,
          ...style.detailsButton,
          flexDirection: 'row',
        }}
        onPress={() => {
          navigation.navigate('Orders');
        }}>
        <MaterialIcons
          name="shopping-basket"
          color={colors.LIGHT_GREEN}
          size={20}
          style={{marginRight: 5}}
        />
        <Text style={style.detailsText}>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...style.button,
          ...style.printButton,
          flexDirection: 'row',
        }}
        onPress={() => {
          onClearOrder();
          navigation.navigate('Home');
        }}>
        <MaterialIcons
          name="home"
          color={colors.WHITE}
          size={20}
          style={{marginRight: 5}}
        />
        <Text style={style.printText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    onClearOrder: () => dispatch({type: FINISH_ORDER}),
  };
};
export default connect(null, mapDispatchToProps)(OrderDetailsButtons);
