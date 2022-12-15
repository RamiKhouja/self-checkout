import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  View,
  Dimensions,
  Button,
  TextInput,
} from 'react-native';

import Carousel from 'simple-carousel-react-native';

import style from './style';

export default function ProductDetails({route}) {
  const screenWidth = Dimensions.get('window').width;

  return (
    <ScrollView>
      <Carousel showBubbles={false} height={200} width={screenWidth}>
        {route.params.images.map(image => (
          <Image
            key={image.key}
            source={{uri: image.url}}
            style={style.image}
          />
        ))}
      </Carousel>
      <View style={style.container}>
        <Text style={style.titleText}>{route.params.name}</Text>
        <Text style={style.price}>$ {route.params.price}</Text>
        <View style={style.action}>
          <TextInput
            style={style.qquantityLabelty}
            textAlign="center"
            placeholder="1"
            keyboardType="numeric"
          />
          <View style={style.button}>
            <Button title="Add to cart" color="#1D8348" />
          </View>
        </View>
        <Text>{route.params.description}</Text>
        <Text styles={{padding: 100}}>&nbsp;</Text>
      </View>
    </ScrollView>
  );
}
