import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Formik} from 'formik';

import style from './style';

import {connect} from 'react-redux';
import {AUTH_USER} from '../../redux/actions';
import colors from '../../assets/colors';
import LoginSchema from '../../forms/loginSchema';

function Login({navigation, onLogin, user, errorLogin}) {
  const [isLogging, setIsLogging] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [onResetForm, setOnResetForm] = useState(undefined);
  useEffect(() => {
    if (errorLogin !== null && errorLogin !== undefined) {
      Alert.alert('Incorrect user or password', null, [{text: 'OK'}]);
      setIsLogging(false);
    }
  }, [errorLogin]);

  useEffect(() => {
    setIsLogging(false);
    if (typeof user != 'undefined' && user != null)
      if (Object.keys(user).length > 0) {
        onResetForm();
        Keyboard.dismiss();
        navigation.navigate('HomeNavigator');
      }
  }, [user]);

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      enableReinitialize={false}
      validationSchema={LoginSchema}
      onSubmit={(values, {resetForm}) => {
        setIsLogging(true);
        setOnResetForm(() => resetForm);
        onLogin(values);
      }}>
      {formprops => (
        <View style={style.container}>
          <View style={style.titleBlock}>
            <MaterialIcons
              name="lock-outline"
              size={18}
              color="#333"
              style={{marginTop: 4}}
            />

            <Text style={style.titleText}>Sign in</Text>
          </View>
          <TextInput
            placeholder="example@domain.com"
            keyboardType="email-address"
            disabled={isLogging}
            style={style.input}
            onChangeText={formprops.handleChange('username')}
            value={formprops.values.username}
          />
          <View>
            <TouchableOpacity
              onPress={e => {
                e.stopPropagation();
                setHidePassword(prevState => !prevState);
              }}
              style={style.showPasswordIcon}>
              <MaterialIcons
                name="remove-red-eye"
                size={30}
                color={colors.LIGHT_BLACK}
              />
            </TouchableOpacity>
            <TextInput
              placeholder="Password"
              disabled={isLogging}
              secureTextEntry={hidePassword}
              style={style.input}
              onChangeText={formprops.handleChange('password')}
              value={formprops.values.password}
            />
          </View>
          <View style={style.button}>
            {isLogging ? (
              <ActivityIndicator size="large" color={colors.LIGHT_GREEN} />
            ) : (
              <Button
                disabled={isLogging}
                title="Login"
                color={isLogging ? colors.MEDIUM_GRAY : colors.LIGHT_GREEN}
                onPress={formprops.handleSubmit}
              />
            )}
          </View>
          <View style={style.signinBlock}>
            <Text style={style.paragraph}>Not a member yet?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={[style.paragraph, style.link]}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <View style={style.signinBlock}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgetPassword')}>
              <Text style={[style.paragraph, style.link]}>
                Did you forgot you're password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    errorLogin: state.userReducer.errorLogin,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch({type: AUTH_USER, payload: user}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
