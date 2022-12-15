import {Formik} from 'formik';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import CustomModal from '../CustomModal';
import {connect} from 'react-redux';
import {ON_UPDATE_ACCOUNT} from '../../redux/actions';
import style from './style';
import {TextInput} from 'react-native-gesture-handler';
import AccountSchema from '../../forms/userSchema';
import colors from '../../assets/colors';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import ConfirmModal from '../ConfirmModal';
const AccountModal = ({
  isVisible,
  setIsVisible,
  user,
  onUpdateUser,
  updatingLoading,
}) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  useEffect(() => {
    if (updatingLoading) {
      setIsUpdating(true);
      setIsConfirmVisible(true);
    } else {
      setIsUpdating(false);
    }
  }, [updatingLoading]);

  const updateAccount = values => {
    setIsUpdating(true);
    values.id = user.id;
    onUpdateUser(values);
  };

  return (
    <CustomModal
      isModalOpen={isVisible}
      setIsModalOpen={setIsVisible}
      title={'Account'}
      Component={
        <>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1, justifyContent: 'center'}}>
            <ScrollView style={{paddingTop: widthPercentageToDP(20)}}>
              <Formik
                initialValues={{
                  email: user ? user.email : null,
                  username: user ? user.displayName : null,
                  firstname: user ? user.firstName : null,
                  lastname: user ? user.lastName : null,
                }}
                validationSchema={AccountSchema}
                onSubmit={values => {
                  updateAccount(values);
                }}>
                {formprops => (
                  <>
                    <TextInput
                      placeholder="Username"
                      style={style.input}
                      onChangeText={formprops.handleChange('username')}
                      value={formprops.values.username}
                      onPressIn={() => {
                        formprops.touched.username = true;
                      }}
                    />
                    {formprops.errors.username &&
                      formprops.touched.username && (
                        <Text style={style.errorText}>
                          {formprops.errors.username}
                        </Text>
                      )}
                    <TextInput
                      placeholder="First Name"
                      style={style.input}
                      onChangeText={formprops.handleChange('firstname')}
                      value={formprops.values.firstname}
                      onPressIn={() => {
                        formprops.touched.firstname = true;
                      }}
                    />
                    {formprops.errors.firstname &&
                      formprops.touched.firstname && (
                        <Text style={style.errorText}>
                          {formprops.errors.firstname}
                        </Text>
                      )}

                    <TextInput
                      placeholder="Last Name"
                      style={style.input}
                      onChangeText={formprops.handleChange('lastname')}
                      value={formprops.values.lastname}
                    />

                    {formprops.errors.confpassword &&
                      formprops.touched.confpassword && (
                        <Text style={style.errorText}>
                          {formprops.errors.confpassword}
                        </Text>
                      )}

                    <View style={style.button}>
                      {isUpdating ? (
                        <ActivityIndicator
                          size="large"
                          color={colors.LIGHT_GREEN}
                        />
                      ) : (
                        <Button
                          disabled={isUpdating}
                          title="Update"
                          color={
                            isUpdating ? colors.MEDIUM_GRAY : colors.LIGHT_GREEN
                          }
                          onPress={formprops.handleSubmit}
                        />
                      )}
                    </View>
                  </>
                )}
              </Formik>
            </ScrollView>
          </KeyboardAvoidingView>
          <ConfirmModal
            title={'Account Update'}
            content={'Account updated successfully'}
            isModalVisible={isConfirmVisible}
            setIsModalVisible={setIsConfirmVisible}
            onValidate={() => setIsConfirmVisible(false)}
          />
        </>
      }
    />
  );
};
const mapStateToProps = state => ({
  user: state.userReducer.user,
  updatingLoading: state.userReducer.updatingLoading,
});

const mapDispatchToProps = dispatch => {
  return {
    onUpdateUser: user => dispatch({type: ON_UPDATE_ACCOUNT, payload: {user}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountModal);
