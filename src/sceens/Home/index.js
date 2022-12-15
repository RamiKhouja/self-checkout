import React, {useState, useEffect, useCallback} from 'react';
import {View, TouchableOpacity} from 'react-native';

import {copilot, walkthroughable, CopilotStep} from 'react-native-copilot';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Barcode from '../Barcode';

import style from './style';

import colors from '../../assets/colors';
import PaymentButtons from '../../components/PaymentButtons';
import CustomModal from '../../components/CustomModal';
const CopilotIcon = walkthroughable(TouchableOpacity);

const Home = props => {
  const [modalOpen, setModalOpen] = useState(false);

  const checkFirstLaunch = useCallback(async () => {
    if (!global.firstLaunch && typeof global.firstLaunch !== 'undefined')
      props.start();
  }, []);

  useEffect(() => {
    checkFirstLaunch();
  }, [global.firstLaunch]);
  return (
    <View style={style.container}>
      <CustomModal
        isModalOpen={modalOpen}
        setIsModalOpen={setModalOpen}
        title={'Scan Product'}
        Component={<Barcode closeModal={() => setModalOpen(false)} />}
      />
      <CopilotStep
        text="You can choose between Pay in Store or Pay by credit card!"
        order={2}
        name="payment">
        <PaymentButtons
          navigation={sceen => props.navigation.navigate(sceen)}
        />
      </CopilotStep>
      <View style={style.scanView}>
        <CopilotStep
          text="You can start scanning products by clicking on this button!"
          order={1}
          name="barcode">
          <CopilotIcon>
            <TouchableOpacity
              onPress={() => setModalOpen(true)}
              style={style.scanButton}>
              <MaterialCommunityIcons
                name="barcode-scan"
                size={wp(40)}
                color={colors.WHITE}
              />
            </TouchableOpacity>
          </CopilotIcon>
        </CopilotStep>
      </View>
    </View>
  );
};

export default copilot({overlay: 'svg', animated: true})(Home);
