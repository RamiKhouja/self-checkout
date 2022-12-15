import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {Formik} from 'formik';

import sendRequest from '../../api/contact';
import ContactSchema from '../../forms/contactSchema';

import colors from '../../assets/colors';
import style from './style';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = values => {
    setIsLoading(true);
    let subj = values.subject + ' (' + values.email + ')';
    sendRequest(subj, values)
      .then(res => {
        setIsLoading(false);
        Alert.alert(
          'Email Sent Successfully!',
          'Thank you for contacting us. \nWe will reach you as soon as possible.',
        );
      })
      .catch(err =>
        Alert.alert('OOPS!', 'Something went wrong. \nPlease try again.'),
      );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
      <ScrollView style={{paddingTop: widthPercentageToDP(30)}}>
        <Formik
          initialValues={{
            email: '',
            subject: '',
            message: '',
          }}
          validationSchema={ContactSchema}
          onSubmit={(values, {resetForm}) => {
            sendMessage(values);
            resetForm({values: null});
          }}>
          {formprops => (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={style.container}>
                <View style={style.titleBlock}>
                  <MaterialIcons
                    name="email"
                    size={24}
                    color={colors.LIGHT_GREEN}
                    style={{marginTop: 1}}
                  />
                  <Text style={style.titleText}>Get in Touch</Text>
                </View>
                <TextInput
                  placeholder="Email"
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
                  placeholder="Subject"
                  style={style.input}
                  onChangeText={formprops.handleChange('subject')}
                  value={formprops.values.subject}
                />
                <TextInput
                  placeholder="Message"
                  multiline={true}
                  style={style.input}
                  onChangeText={formprops.handleChange('message')}
                  value={formprops.values.message}
                  onPressIn={() => {
                    formprops.touched.message = true;
                  }}
                />
                {formprops.errors.message && formprops.touched.message && (
                  <Text style={style.errorText}>
                    {formprops.errors.message}
                  </Text>
                )}
                {isLoading ? (
                  <ActivityIndicator size="large" color={colors.LIGHT_GREEN} />
                ) : (
                  <TouchableOpacity
                    style={style.actionButton}
                    onPress={formprops.handleSubmit}>
                    <FontAwesome
                      name="send"
                      size={22}
                      color={colors.WHITE}
                      style={{paddingRight: 10}}
                    />
                    <Text style={style.submitTitle}>Send</Text>
                  </TouchableOpacity>
                )}
              </View>
            </TouchableWithoutFeedback>
          )}
        </Formik>
        <View style={style.poweredSection}>
          <Text style={style.poweredText}>Powered by</Text>
          <Image
            source={require('../../assets/img/oncode-logo.png')}
            style={style.oncodeLogo}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
