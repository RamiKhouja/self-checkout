import React, {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import WebView from 'react-native-webview';
import colors from '../../assets/colors';
import style from './style';
const Index = () => {
  const webview = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (webview.current !== null && webview.current !== undefined) {
      setIsLoading(false);
    }
  }, [webview]);

  return (
    <>
      {isLoading && (
        <View style={style.spinnerContainer}>
          <ActivityIndicator size="large" color={colors.LIGHT_GREEN} />
        </View>
      )}
      <WebView
        onLoadingFinish={() => setIsLoading(false)}
        ref={webview}
        source={{uri: 'https://lve.oncode.ca/mon-compte/lost-password/'}}
      />
    </>
  );
};

export default Index;
