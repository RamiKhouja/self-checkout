import {View, Text} from 'react-native';
import React from 'react';
import style from './style';

const ItemRow = ({item}) => {
  return (
    <View id={item.id} style={style.infoRow}>
      <View style={{flexDirection: 'column'}}>
        <Text style={style.darkGray}>{item.name}</Text>
        <Text>
          {item.quantity} x ${item.price}
        </Text>
      </View>
      <Text style={style.darkGray}>${item.total}</Text>
    </View>
  );
};

export default ItemRow;
