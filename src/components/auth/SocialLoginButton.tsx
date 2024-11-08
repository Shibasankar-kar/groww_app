import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import CustomText from '../global/CustomText';
import {Colors} from '../../constants/Colors';
import {FONTS} from '../../constants/Fonts';

interface SocialLoginButtonProps {
  onPress: () => void;
  text: string;
  icon: React.ReactNode;
}

const SocialLoginButton: FC<SocialLoginButtonProps> = ({
  text,
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.8}>
      {icon}
      <CustomText variant="h6" fontFamily={FONTS.Medium} style={styles.text}>
        {text}
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    marginVertical: 10,
    backgroundColor: Colors.light_background,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    gap: 10,
  },
  text: {
    color: 'black',
  },
});

export default SocialLoginButton;
