import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import colors from '../../assets/colors';
import Card from '../../components/Card';
import style from './style';
import {connect} from 'react-redux';
import {GET_ORDERS} from '../../redux/actions';

const Orders = ({orders, navigation, onRequestOrders, user}) => {
  const [isLoading, setIsLoading] = useState(false);
  const renderOrdersList = useCallback(userData => {
    if (userData && orders.length === 0) {
      setIsLoading(true);
      onRequestOrders(userData);
    }
  }, []);

  useEffect(() => {
    if (orders.length > 0) {
      setIsLoading(false);
    }
  }, [orders]);

  useEffect(() => {
    renderOrdersList(user);
  }, [user]);
  const renderSwitch = useCallback((state, item) => {
    switch (state) {
      case 'completed':
        return (
          <>
            <Text style={{...style.bold, ...style.green}}>Completed</Text>
            <TouchableOpacity
              style={{...style.button, ...style.detailsButton}}
              onPress={() =>
                navigation.navigate('OrderDetails', {order: item})
              }>
              <Text style={style.detailsText}>Details</Text>
            </TouchableOpacity>
          </>
        );
      case ('processing', 'pending', 'on-hold'):
        return (
          <>
            <Text style={{...style.bold, ...style.orange}}>In Progress</Text>
            <TouchableOpacity
              style={{...style.button, ...style.editButton}}
              onPress={() => console.log('edit')}>
              <Text style={style.editText}>Edit</Text>
            </TouchableOpacity>
          </>
        );
      case 'cancelled':
        return (
          <>
            <Text style={{...style.bold, ...style.red}}>Cancelled</Text>
          </>
        );
      case 'refunded':
        return (
          <>
            <Text style={{...style.bold, ...style.red}}>Refunded</Text>
          </>
        );
      default:
        return (
          <>
            <Text style={{...style.bold, ...style.orange}}>In Progress</Text>
            <TouchableOpacity
              style={{...style.button, ...style.editButton}}
              onPress={() => console.log('edit')}>
              <Text style={style.editText}>Edit</Text>
            </TouchableOpacity>
          </>
        );
    }
  }, []);

  return (
    <View style={style.container}>
      {isLoading ? (
        <View style={style.spinnerContainer}>
          <ActivityIndicator size="large" color={colors.LIGHT_GREEN} />
        </View>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={order => order.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={order => {
            let qty = 0;
            order.item.line_items.forEach(element => {
              qty += element.quantity;
            });
            return (
              <Card>
                <View style={style.cardContent}>
                  <View style={style.cardRow}>
                    <Text style={style.bold}>Order #{order.item.id}</Text>
                    <Text>{order.item.date_modified.substring(0, 10)}</Text>
                  </View>
                  <View style={style.cardRow}>
                    <View style={{flexDirection: 'row'}}>
                      <Text>Quantity : </Text>
                      <Text style={style.bold}>{qty}</Text>
                    </View>
                    <Text>
                      {order.item.date_modified.substring(
                        order.item.date_modified.length - 5,
                      )}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Text>Total amount : </Text>
                    <Text style={style.bold}>${order.item.total}</Text>
                  </View>
                  <View style={style.cardRow}>
                    {renderSwitch(order.item.status, order.item)}
                  </View>
                </View>
              </Card>
            );
          }}
        />
      )}
    </View>
  );
};
const mapStateToProps = state => {
  return {
    orders: state.orderReducer.orders,
    error: state.error,
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestOrders: user => dispatch({type: GET_ORDERS, payload: {user}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
