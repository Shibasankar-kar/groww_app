import {StyleSheet, Text, TextStyle, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';

interface OtpTimerProps {
  type: string;
  style?: TextStyle;
  onPress: () => void;
}

const OtpTimer: FC<OtpTimerProps> = ({type, onPress, style}) => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
		
	}, []);

  return (
    <View>
      <Text>Resend OTP : {timer}</Text>
    </View>
  );
};

export default OtpTimer;

const styles = StyleSheet.create({});
