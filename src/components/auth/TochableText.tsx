import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, TextStyle} from 'react-native';
import CustomText from '../global/CustomText';
import {Colors} from '../../constants/Colors';
import {FONTS} from '../../constants/Fonts';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {useTheme} from '@react-navigation/native';

interface TochableTextProps {
  text: string;
  onPress: () => void;
  style?: TextStyle;
}

export const TochableText: FC<TochableTextProps> = ({text, onPress, style}) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.bottomText, {color: colors.primary}, style]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  bottomText: {
    fontFamily: FONTS.Medium,
    fontSize: RFPercentage(1.5),
  },
});
