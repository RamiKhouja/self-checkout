import React, {useCallback, useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../../assets/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import style from './style';

const Counter = ({initValue, increment, decrement}) => {
  const quantity = useRef(initValue ? initValue : 1);

  const decreaseCounter = useCallback(() => {
    if (quantity.current === 1) {
      decrement(1);
      quantity.current = 1;
    } else {
      decrement(quantity.current - 1);
      quantity.current = quantity.current - 1;
    }
  }, [quantity, decrement]);

  const increaseCounter = useCallback(() => {
    increment(quantity.current + 1);
    quantity.current = quantity.current + 1;
  }, [quantity, increment]);

  return (
    <>
      <TouchableOpacity
        onPress={increaseCounter}
        style={[style.counterColumn, style.rightComponent]}>
        <Entypo name="plus" size={24} color={colors.DARK_GRAY} />
      </TouchableOpacity>
      <View style={style.counterInitValueContainer}>
        <Text style={style.initValueStyle}>{quantity.current}</Text>
      </View>
      <TouchableOpacity
        onPress={decreaseCounter}
        style={[style.counterColumn, style.leftComponent]}>
        <Entypo name="minus" size={24} color={colors.DARK_GRAY} />
      </TouchableOpacity>
    </>
  );
};

export default Counter;
