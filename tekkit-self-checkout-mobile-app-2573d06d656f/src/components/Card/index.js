import React from 'react';
import {View} from 'react-native';

import style from './style';

const Card = props => {
  return <View style={style.card}>{props.children}</View>;
};
export default React.memo(Card);
