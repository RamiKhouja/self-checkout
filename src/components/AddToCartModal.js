import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Modal,
  ScrollView,
  SafeAreaView,
  TextInput,
  FlatList,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {globalStyles} from '../assets/styles';
import {ADD_TO_CART, EDIT_ELEMENT} from '../redux/actions';
import ActionButtons from './ActionButtons';
import RenderHtml from 'react-native-render-html';
import Counter from './Counter';
import style from './style';
import colors from '../assets/colors';
import {fetchProductsByWord} from '../api/products';
import {calculatePrice} from '../utils/calculatePrice';

const AddToCartModal = ({
  data,
  isModalVisible,
  setIsModalVisible,
  addToBasket,
  cartList,
  editQuantity,
  scannedProductQuantity,
  confirmAddToCart,
}) => {
  const [quantity, setQuantity] = useState(
    scannedProductQuantity ? scannedProductQuantity : 1,
  );
  const [selectedQty, setSelectedQty] = useState(1);
  const [keyOpen, setKeyOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [query, setQuery] = useState([]);
  const [openDetails, setOpenDetails] = useState(false);
  const [searchedText, setSearchedText] = useState('');

  const addToCart = () => {
    const element = cartList.find(item => item.product.id === data.id);
    if (element) editQuantity(element, quantity);
    else addToBasket({data, quantity});
    setIsModalVisible(() => {
      confirmAddToCart();
      return false;
    });
  };
  const addSearchedToCart = () => {
    const element = cartList.find(
      item => item.product.id === selectedProduct.id,
    );
    if (element) editQuantity(element, selectedQty);
    else addToBasket({data: selectedProduct, quantity: selectedQty});
    setIsModalVisible(() => {
      confirmAddToCart();
      return false;
    });
  };
  const onSelectItem = item => {
    setSelectedProduct(item);
    setSearchedText('');
    setQuantity(1);
    setQuery([]);
  };
  let details = data !== null && data !== undefined && {html: data.description};
  let selectedDetails = selectedProduct !== null &&
    selectedProduct !== undefined && {html: selectedProduct.description};
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setKeyOpen(true));
    Keyboard.addListener('keyboardDidHide', () => setKeyOpen(false));
  });

  return (
    <Modal
      presentationStyle={'pageSheet'}
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        setIsModalVisible(prevState => !prevState);
      }}>
      {data !== null && data !== undefined ? (
        <View style={style.modalBackground}>
          <View
            style={[
              style.modalContent,
              openDetails ? {height: '70%'} : {height: '40%'},
            ]}>
            <Text style={style.addToCartmodalTitle}>
              Product Scanned Successfully !
            </Text>
            <Text style={style.addToCartproductName}>{data && data.name}</Text>
            <View style={style.quantityContainer}>
              <View style={{borderWidth: 1, width: 100, flexDirection: 'row'}}>
                <Counter
                  initValue={quantity}
                  increment={() => setQuantity(prevState => prevState + 1)}
                  decrement={() => {
                    if (quantity > 1) setQuantity(prevState => prevState - 1);
                  }}
                />
              </View>
              <Text style={style.productPrice}>
                ${data && calculatePrice(data.price * quantity)}
              </Text>
            </View>
            <ActionButtons
              onInfo={() => {
                openDetails ? setOpenDetails(false) : setOpenDetails(true);
              }}
              onValidate={addToCart}
              onCancel={() => setIsModalVisible(false)}
            />
            {openDetails && (
              <View style={{padding: 10}}>
                <Text style={[globalStyles.titleText, {marginBottom: 10}]}>
                  Details
                </Text>
                {data.details !== null && data.details !== '' ? (
                  <SafeAreaView style={{height: 150}}>
                    <ScrollView>
                      <RenderHtml source={details} />
                    </ScrollView>
                  </SafeAreaView>
                ) : (
                  <Text>This product has no details.</Text>
                )}
              </View>
            )}
          </View>
        </View>
      ) : (
        <View style={style.modalBackground}>
          <View
            style={[
              style.modalContent,
              openDetails ? {height: '90%'} : {height: '70%'},
            ]}>
            <View>
              {selectedProduct === null && (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    width: '95%',
                    marginTop: 0,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setIsModalVisible(false),
                        setQuery([]),
                        setSelectedProduct(null);
                    }}
                    style={style.iconButtonEnd}>
                    <MaterialIcons
                      name="close"
                      size={24}
                      color={colors.WHITE}
                    />
                  </TouchableOpacity>
                </View>
              )}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 5,
                }}>
                {!keyOpen ? (
                  selectedProduct === null ? (
                    <Text
                      style={[
                        style.addToCartmodalTitle,
                        {color: colors.DARK_GRAY, marginTop: 5},
                      ]}>
                      Sorry, Barcode not registered! Please search by name
                    </Text>
                  ) : (
                    <Text
                      style={[
                        style.addToCartmodalTitle,
                        {color: colors.LIGHT_GREEN, marginTop: 5},
                      ]}>
                      Product Chosen Successfully
                    </Text>
                  )
                ) : (
                  <Text style={[{color: colors.DARK_GRAY, fontWeight: 'bold'}]}>
                    Searching...
                  </Text>
                )}
              </View>
            </View>
            <View>
              <TextInput
                value={searchedText}
                onPressIn={() => setSelectedProduct(null)}
                placeholder="Search..."
                style={[
                  style.search,
                  query.length > 0 && {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                ]}
                onChangeText={searchText => {
                  setSearchedText(searchText),
                    searchText.length > 1
                      ? fetchProductsByWord(searchText).then(res =>
                          setQuery(res),
                        )
                      : setQuery([]);
                }}
              />
              {query.length > 0 && searchedText !== '' && (
                <SafeAreaView style={style.suggestionList}>
                  <FlatList
                    style={{paddingHorizontal: 5, paddingBottom: 5}}
                    data={query}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={style.suggestionListItem}
                        onPress={() => onSelectItem(item)}>
                        <Text style={style.suggestionItemText}>
                          {item.name}
                        </Text>
                        <MaterialIcons
                          name="check-circle-outline"
                          size={16}
                          color={colors.LIGHT_GREEN}
                        />
                      </TouchableOpacity>
                    )}
                  />
                </SafeAreaView>
              )}
            </View>
            {selectedProduct !== null && !keyOpen ? (
              <>
                <Text style={style.addToCartproductName}>
                  {selectedProduct.name}
                </Text>
                <View style={style.quantityContainer}>
                  <View
                    style={{borderWidth: 1, width: 100, flexDirection: 'row'}}>
                    <Counter
                      initValue={selectedQty}
                      increment={() =>
                        setSelectedQty(prevState => prevState + 1)
                      }
                      decrement={() => {
                        if (selectedQty > 1)
                          setSelectedQty(prevState => prevState - 1);
                      }}
                    />
                  </View>
                  <Text style={style.productPrice}>
                    ${calculatePrice(selectedProduct.price * selectedQty)}
                  </Text>
                </View>
                <ActionButtons
                  onInfo={() => {
                    openDetails ? setOpenDetails(false) : setOpenDetails(true);
                  }}
                  onValidate={addSearchedToCart}
                  onCancel={() => {
                    setIsModalVisible(false),
                      setQuery([]),
                      setSelectedProduct(null);
                  }}
                />
                {openDetails && (
                  <View style={{padding: 10}}>
                    <Text style={[globalStyles.titleText, {marginBottom: 10}]}>
                      Details
                    </Text>
                    {selectedProduct.details !== null &&
                    selectedProduct.details !== '' ? (
                      <SafeAreaView style={{height: 150}}>
                        <ScrollView>
                          <RenderHtml source={selectedDetails} />
                        </ScrollView>
                      </SafeAreaView>
                    ) : (
                      <Text>This product has no details.</Text>
                    )}
                  </View>
                )}
              </>
            ) : (
              <Text></Text>
            )}
          </View>
        </View>
      )}
    </Modal>
  );
};
const mapStateToProps = state => {
  return {
    cartList: state.cartReducer.cartList,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToBasket: product => dispatch({type: ADD_TO_CART, payload: {product}}),
    editQuantity: (item, newQuantity) =>
      dispatch({
        type: EDIT_ELEMENT,
        payload: {
          id: item.product.id,
          price: calculatePrice(item.product.price),
          quantity: item.quantity,
          newQuantity: newQuantity,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartModal);
