import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import CustomText from '../global/CustomText';
import {Text} from 'react-native';
import {FONTS} from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';
import {useTheme} from '@react-navigation/native';

interface UnderlineTextProps {
  text: string;
}
const UnderlineText: FC<UnderlineTextProps> = ({text}) => {
  return <Text style={styles.underlineText}>{text}</Text>;
};
export const ButtomText = () => {
  const {colors} = useTheme();
  return (
    <View>
      <CustomText
        variant="h8"
        fontFamily={FONTS.Regular}
        style={{color: colors.text, opacity: 0.4, textAlign: 'center'}}>
        By proceeding. I accept Groww's <UnderlineText text="T&C" />,{' '}
        <UnderlineText text="Privacy Policy" />,{' '}
        <UnderlineText text="Tariff Rates" />,{' '}
        <UnderlineText text="FAECA Declaration" /> &{' '}
        <UnderlineText text="CIBIL T&C" />.
      </CustomText>
    </View>
  );
};
const styles = StyleSheet.create({
  // text: {opacity: 0.4, textAlign: 'center'},
  underlineText: {textDecorationLine: 'underline'},
});
