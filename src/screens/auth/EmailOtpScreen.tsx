import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import {ScrollView} from 'react-native';
import {CenteredLogo} from '../../components/global/CenteredLogo';
import {TouchableOpacity} from 'react-native';
import CustomInput from '../../components/inputs/CustomInput';
import {goBack} from '../../utils/NavigationUtil';
import OtpTimer from '../../components/auth/OtpTimer';
interface emailOtpProps {
  email: string;
}
const EmailOtpScreen: FC<emailOtpProps> = ({route}: any) => {
  const [otp, setOtp] = useState('');
  const [OtpError, setOtpError] = useState('');

  const resendOTPHandler = () => {};

  return (
    <CustomSafeAreaView>
      <ScrollView>
        <CenteredLogo />
        <TouchableOpacity onPress={() => goBack()}>
          <View pointerEvents="none">
            <CustomInput label="EMAIL ADDRESS *" value={route.params.email} />
          </View>
        </TouchableOpacity>
        <CustomInput
          label="ENTER OTP SEND TO THIS EMAIL"
          value={otp}
          onChangeText={value => {
            setOtp(value);
            setOtpError('');
          }}
          onSubmitEditing={() => {
            console.log('hit api here');
          }}
          error={OtpError}
          returnKeyType="done"
          maxLength={6}
          keyboardType="number-pad"
          rightText={
            <OtpTimer type="email" onPress={() => resendOTPHandler()} />
          }
          
        />
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default EmailOtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
