import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Formik} from 'formik';
import colors from '../../assets/colors';

import {createUser} from '../../api/users';

import SignSchema from '../../forms/signUpSchema';

import style from './style';

export default function Signup({navigation}) {
  const [isSigning, setIsSigning] = useState(false);
  const [res, setRes] = useState(null);
  useEffect(() => {
    setIsSigning(false);
  }, [res]);
  const addCustomer = data =>
    createUser(data)
      .then(res => {
        setRes(res);
        if (res.data) {
          let errMsg = '';
          switch (res.code) {
            case 'registration-error-username-exists':
              errMsg =
                'Username Already Exists!\nPlease choose another username.';
              break;
            case 'registration-error-email-exists':
              errMsg = 'Email Already Exists!\nPlease choose another email.';
              break;
            default:
              errMsg = 'Internal Server Error.\nPlease try again later.';
          }
          Alert.alert('Registration Error', errMsg, [{text: 'OK'}]);
        } else {
          navigation.navigate('Login');
        }
      })
      .catch(err => {
        console.log(err);
      });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={style.withKeyboardView}>
      <ScrollView style={style.scrollView}>
        <Formik
          initialValues={{
            email: '',
            username: '',
            firstname: '',
            lastname: '',
            password: '',
            confpassword: '',
          }}
          validationSchema={SignSchema}
          onSubmit={values => {
            addCustomer(values);
            setIsSigning(true);
          }}>
          {formprops => (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={style.container}>
                <View style={style.titleBlock}>
                  <MaterialIcons
                    name="lock"
                    size={18}
                    color="#333"
                    style={{marginTop: 4}}
                  />
                  <Text style={style.titleText}>New Account</Text>
                </View>
                <TextInput
                  placeholder="example@domain.com"
                  keyboardType="email-address"
                  style={style.input}
                  onChangeText={formprops.handleChange('email')}
                  value={formprops.values.email}
                  onPressIn={() => {
                    formprops.touched.email = true;
                  }}
                />
                {formprops.errors.email && formprops.touched.email && (
                  <Text style={style.errorText}>{formprops.errors.email}</Text>
                )}
                <TextInput
                  placeholder="Username"
                  style={style.input}
                  onChangeText={formprops.handleChange('username')}
                  value={formprops.values.username}
                  onPressIn={() => {
                    formprops.touched.username = true;
                  }}
                />
                {formprops.errors.username && formprops.touched.username && (
                  <Text style={style.errorText}>
                    {formprops.errors.username}
                  </Text>
                )}
                <View style={style.nameInputBlock}>
                  <TextInput
                    placeholder="First Name"
                    style={style.nameInput}
                    onChangeText={formprops.handleChange('firstname')}
                    value={formprops.values.firstname}
                    onPressIn={() => {
                      formprops.touched.firstname = true;
                    }}
                  />
                  <TextInput
                    placeholder="Last Name"
                    style={[style.nameInput, {marginLeft: 12}]}
                    onChangeText={formprops.handleChange('lastname')}
                    value={formprops.values.lastname}
                  />
                </View>
                {formprops.errors.firstname && formprops.touched.firstname && (
                  <Text style={style.errorText}>
                    {formprops.errors.firstname}
                  </Text>
                )}
                <TextInput
                  placeholder="Password"
                  secureTextEntry={true}
                  style={style.input}
                  onChangeText={formprops.handleChange('password')}
                  value={formprops.values.password}
                  onPressIn={() => {
                    formprops.touched.password = true;
                  }}
                />
                {formprops.errors.password && formprops.touched.password && (
                  <Text style={style.errorText}>
                    {formprops.errors.password}
                  </Text>
                )}
                <TextInput
                  placeholder="Confirm Password"
                  secureTextEntry={true}
                  style={style.input}
                  onChangeText={formprops.handleChange('confpassword')}
                  value={formprops.values.confpassword}
                  onPressIn={() => {
                    formprops.touched.confpassword = true;
                  }}
                />
                {formprops.errors.confpassword &&
                  formprops.touched.confpassword && (
                    <Text style={style.errorText}>
                      {formprops.errors.confpassword}
                    </Text>
                  )}
                <View style={style.button}>
                  {isSigning ? (
                    <ActivityIndicator
                      size="large"
                      color={colors.LIGHT_GREEN}
                    />
                  ) : (
                    <Button
                      disabled={isSigning}
                      title="Sign Up"
                      color={
                        isSigning ? colors.MEDIUM_GRAY : colors.LIGHT_GREEN
                      }
                      onPress={formprops.handleSubmit}
                    />
                  )}
                </View>
                <View style={style.signinBlock}>
                  <Text style={style.paragraph}>Already a member?</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={[style.paragraph, style.link]}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
