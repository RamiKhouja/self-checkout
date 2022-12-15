import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, View, Text, ActivityIndicator} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';

import Card from '../Card';

import {FETCH_PRODUCTS} from '../../redux/actions';

import {globalStyles} from '../../assets/styles';
import style from './style';
import colors from '../../assets/colors';

const Catalog = ({
  products,
  navigation,
  onRequestProducts,
  allLoaded,
  ListHeader,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(true);

  useEffect(() => {
    onRequestProducts(page);
  }, [page]);

  useEffect(() => {
    if (products.length > 0 && !allLoaded) {
      setIsLoading(false);
      setLoadMore(true);
    }
  }, [products]);

  const onLoadMoreProducts = () => {
    setLoadMore(false);
    setPage(prevState => (loadMore ? prevState + 1 : prevState));
  };

  const renderItem = useCallback(({item}) => {
    return (
      <Card>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductDetails', item)}>
          <Image
            source={
              item.images.length > 0
                ? {uri: item.images[0].src}
                : require('../assets/img/product.jpg')
            }
            indicator={Progress.Pie}
            indicatorProps={{
              size: 80,
              borderWidth: 0,
              color: 'rgba(150, 150, 150, 1)',
              unfilledColor: 'rgba(200, 200, 200, 0.2)',
            }}
            style={style.cardImage}
          />
        </TouchableOpacity>

        <View style={style.cardContent}>
          <Text style={globalStyles.titleText}>{item.name}</Text>
          <Text style={globalStyles.paragraph}>$ {item.price}</Text>
          <TouchableOpacity
            style={style.viewDetails}
            onPress={() => navigation.navigate('ProductDetails', item)}>
            <MaterialIcons
              name="remove-red-eye"
              size={24}
              color={colors.LIGHT_GREEN}
              style={{marginRight: 10}}
            />
            <Text style={style.buttonText}>View details</Text>
          </TouchableOpacity>
        </View>
      </Card>
    );
  }, []);

  if (isLoading) {
    return (
      <View style={style.spinnerContainer}>
        <ActivityIndicator size="large" color={colors.LIGHT_GREEN} />
      </View>
    );
  } else
    return (
      <FlatList
        ListHeaderComponent={ListHeader}
        stickyHeaderIndices={[0]}
        style={style.flatList}
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        extraData={products}
        removeClippedSubviews={true}
        onEndReached={onLoadMoreProducts}
        ListFooterComponent={
          !allLoaded ? (
            <View style={[style.spinnerContainer, style.loadMoreSpinner]}>
              <ActivityIndicator size="large" color={colors.LIGHT_GREEN} />
            </View>
          ) : null
        }
      />
    );
};
const mapStateToProps = state => {
  return {
    products: state.productReducer.products,
    error: state.error,
    allLoaded: state.allLoaded,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestProducts: page =>
      dispatch({type: FETCH_PRODUCTS, payload: {page}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
