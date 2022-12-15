import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../assets/colors';
import style from './style';

const ActionButtons = ({onValidate, onCancel, onInfo, equalSize}) => {
  return (
    <View style={style.addproductsModalContainer}>
      {onInfo && (
        <TouchableOpacity onPress={() => onInfo()} style={style.detailIcon}>
          <Entypo name="info-with-circle" size={40} color={colors.DARK_GRAY} />
        </TouchableOpacity>
      )}
      {onValidate !== undefined && (
        <TouchableOpacity
          onPress={onValidate}
          style={[
            style.iconButton,
            {
              backgroundColor: colors.LIGHT_GREEN,
            },
          ]}>
          <MaterialIcons
            name="check"
            size={equalSize ? 30 : 50}
            color={colors.WHITE}
          />
        </TouchableOpacity>
      )}
      {onCancel !== undefined && (
        <TouchableOpacity onPress={() => onCancel()} style={style.iconButton}>
          <MaterialIcons name="close" size={30} color={colors.WHITE} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ActionButtons;
