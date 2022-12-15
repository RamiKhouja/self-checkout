import React, {useEffect} from 'react';
import {connect} from 'react-redux';

const ProtectedNavigation = ({user, navigation}) => {
  useEffect(() => {
    if (typeof user != 'undefined') {
      navigation.push('HomeNavigator');
    } else navigation.push('Login');
  }, []);
  return <></>;
};
const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(ProtectedNavigation);
