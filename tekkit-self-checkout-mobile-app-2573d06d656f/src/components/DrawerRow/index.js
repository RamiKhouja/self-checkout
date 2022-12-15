import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import style from './style';
import colors from '../../assets/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const DrawerRow = ({callBack, name, title, type}) => {
  switch (type) {
    case 'MaterialCommunityIcons':
      return (
        <TouchableOpacity
          onPress={() => callBack()}
          style={style.drawerItemContainer}>
          <MaterialCommunityIcons
            name={name}
            size={wp(7)}
            color={colors.LIGHT_GREEN}
          />
          <Text style={style.drawerItemTitle}>{title}</Text>
        </TouchableOpacity>
      );

    case 'MaterialIcons':
      return (
        <TouchableOpacity
          onPress={() => callBack()}
          style={style.drawerItemContainer}>
          <MaterialIcons name={name} size={wp(7)} color={colors.LIGHT_GREEN} />
          <Text style={style.drawerItemTitle}>{title}</Text>
        </TouchableOpacity>
      );
    default:
      return (
        <TouchableOpacity
          onPress={() => callBack()}
          style={style.drawerItemContainer}>
          <SimpleLineIcons
            name={name}
            size={wp(7)}
            color={colors.LIGHT_GREEN}
          />
          <Text style={style.drawerItemTitle}>{title}</Text>
        </TouchableOpacity>
      );
  }
};

export default DrawerRow;

/* return (
    <TouchableOpacity
      onPress={() => callBack()}
      style={style.drawerItemContainer}>
      {renderIcon()}

      <Text style={style.drawerItemTitle}>{title}</Text>
    </TouchableOpacity>
  );
};
/* return (
    <TouchableOpacity
      style={style.drawerItemContainer}
      onPress={() => navigate()}>
   { ()=>{if (type==='MaterialCommunityIcons') {
       return ( 
      />)
    }
} 
      
      
      
      <MaterialIcons
        name={'delete-forever'}
        size={wp(7)}
        color={colors.LIGHT_GREEN}
      />}
      <MaterialCommunityIcons
        name="information-outline"
        size={wp(7)}
        color={colors.LIGHT_GREEN}
      />
      <SimpleLineIcons name="logout" size={wp(7)} color={colors.LIGHT_GREEN} />
      <Text style={style.drawerItemTitle}>{title}</Text>
    </TouchableOpacity>
  );
};*/
