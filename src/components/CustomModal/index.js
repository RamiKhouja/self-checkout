import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import React from 'react';
import style from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../assets/colors';
const CustomModal = ({
  Component,
  title,
  isModalOpen,
  setIsModalOpen,
  HeaderComponent,
}) => {
  return (
    <Modal
      style={style.modalWrapper}
      visible={isModalOpen}
      animationIn="slideInUp"
      hasBackdrop={true}
      backdropColor={colors.LIGHT_BLACK}
      backdropOpacity={0.7}>
      <View style={style.container}>
        <View style={style.modalHeader}>
          {HeaderComponent !== undefined && HeaderComponent !== null ? (
            HeaderComponent
          ) : (
            <Text style={{paddingHorizontal: 12}}> </Text>
          )}
          <Text style={style.modalTitle}>{title}</Text>
          <MaterialIcons
            name="close"
            color={colors.WHITE}
            size={24}
            style={style.modalClose}
            onPress={() => setIsModalOpen(false)}
          />
        </View>
        <View style={style.modalContent}>{Component}</View>
      </View>
    </Modal>
  );
};

export default CustomModal;
