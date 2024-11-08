import React, {FC} from 'react';
import {Image, StyleSheet} from 'react-native';
import {View} from 'react-native';
import {
  normalizeHeight,
  normalizeWidth,
  screenWidth,
} from '../../utils/Scaling';
import {IMAGES} from '../../constants/Images';

export const CenteredLogo: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={IMAGES.logoText} style={styles.img} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  imgContainer: {width: normalizeWidth(110), height: normalizeHeight(28)},
  img: {width: '100%', height: '100%', resizeMode: 'contain'},
});
