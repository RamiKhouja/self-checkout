import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';

import ActionButtons from '../ActionButtons';

import style from './style';

const ConfirmModal = ({
  isModalVisible,
  setIsModalVisible,
  onValidate,
  onCancel,
  title,
  content,
}) => {
  return (
    <Modal
      presentationStyle={'pageSheet'}
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        setIsModalVisible(prevState => !prevState);
      }}>
      <View style={style.modalBackground}>
        <View
          style={[
            style.modalContent,
            content === null ? {height: '25%'} : {height: '50%'},
          ]}>
          <Text style={style.addToCartmodalTitle}>{title}</Text>
          {content !== null ? (
            <>
              <Text style={style.addToCartproductName}>{content}</Text>
              <ActionButtons
                equalSize={true}
                onValidate={onValidate ? () => onValidate() : undefined}
                onCancel={
                  onCancel
                    ? () => {
                        setIsModalVisible(false);
                        onCancel();
                      }
                    : undefined
                }
              />
            </>
          ) : (
            <View style={style.btnTxts}>
              <TouchableOpacity onPress={() => onValidate()}>
                <Text style={[style.btnTxt, style.green]}>Add Again</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setIsModalVisible(false);
                  onCancel();
                }}>
                <Text style={[style.btnTxt, style.gray]}>Close</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmModal;
