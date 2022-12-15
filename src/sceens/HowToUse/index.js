import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import style from './style';

export default function HowToUse() {
  return (
    <ScrollView style={style.container}> 
      <View style={{marginBottom: 20}}>
        <View style={style.section}>
          <Text style={style.subtitle}>How to use Self Checkout?</Text>
          <Text style={style.text}>Self Checkout is an application developed by OnCode that helps you do your daily shopping faster without having to wait in the cachier.</Text>
          <Text style={style.text}>All you have to do is scan your products, pay and go!</Text>
        </View>
        <View style={style.section}>
          <Text style={style.subtitle}>1- Scan a product</Text>
          <Text style={style.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Text>
          <Image
            source={require('../../assets/img/howto/scan.png')}
            style={style.image}
          />
        </View>
        <View style={style.section}>
          <Text style={style.subtitle}>Add the product to cart</Text>
          <Text style={style.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</Text>
          <Image
            source={require('../../assets/img/howto/confirm.png')}
            style={style.image}
          />
        </View>
        <View style={style.section}>
          <Text style={style.subtitle}>Manage your cart</Text>
          <Text style={style.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Text>
          <Image
            source={require('../../assets/img/howto/cart.png')}
            style={style.image}
          />
        </View>
        <View style={style.section}>
          <Text style={style.subtitle}>Pay in the cachier</Text>
          <Text style={style.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Text>
          <Image
            source={require('../../assets/img/howto/qr.png')}
            style={style.image}
          />
        </View>
        <View style={style.section}>
          <Text style={style.subtitle}>Pay by credit card</Text>
          <Text style={style.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Text>
          <Image
            source={require('../../assets/img/howto/pay.png')}
            style={style.image}
          />
        </View>
      </View>
    </ScrollView>
  );
}
