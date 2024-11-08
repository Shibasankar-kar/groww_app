import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import {BackButton} from '../../components/global/BackButton';
import {CenteredLogo} from '../../components/global/CenteredLogo';
import CustomInput from '../../components/inputs/CustomInput';
import {validateEmail} from '../../utils/ValidationUtils';
import {navigate} from '../../utils/NavigationUtil';
import CustomButton from '../../components/global/CustomButton';
import {GlobalStyles} from '../../styles/GlobalStyles';

const EmailScreen: FC = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validate = () => {
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    return true;
  };
  const handelOnSubmit = async () => {
    setLoading(true);
    setTimeout(() => {
      if (validate()) {
        navigate('EmailOtpScreen', {email: email});
      }
      setLoading(false);
    }, 2000);
  };
  return (
    <CustomSafeAreaView>
      <BackButton path="LoginScreen" />
      <ScrollView>
        <CenteredLogo />
        <CustomInput
          label="EMAIL ADDRESS"
          required={true}
          returnKeyType="done"
          value={email}
          inputMode="email"
          focusable={true}
          autoFocus={true}
          error={emailError}
          onEndEditing={() => validate()}
          onChangeText={text => {
            setEmail(text), setEmailError('');
          }}
          placeholder="Eg: me@googl.com"
          onSubmitEditing={() => handelOnSubmit}
        />
      </ScrollView>
      <View style={GlobalStyles.bottomBtn}>
        <CustomButton
          text="NEXT"
          loading={loading}
          disabled={!validateEmail(email) || loading}
          onPress={() => {
            handelOnSubmit();
          }}
        />
      </View>
    </CustomSafeAreaView>
  );
};

export default EmailScreen;

const styles = StyleSheet.create({});
