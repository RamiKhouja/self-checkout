import React from 'react';
import ItemRow from './itemRow';

const OrderItemsList = ({data}) => {
  return data.map(item => <ItemRow key={item.id} item={item} />);
};

export default OrderItemsList;
