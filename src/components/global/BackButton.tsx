import {useTheme} from '@react-navigation/native';
import React, {FC, ReactNode} from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
import {goBack, navigate} from '../../utils/NavigationUtil';

interface BackButtonProps {
  path: string;
}

export const BackButton: FC<BackButtonProps> = ({path}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      onPress={() => {
        path ? navigate(path) : goBack();
      }}>
      <Ionicons name="arrow-back" size={RFValue(20)} color={colors.text} />
    </TouchableOpacity>
  );
};
