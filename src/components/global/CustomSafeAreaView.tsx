import {View, SafeAreaView, StyleSheet, ViewStyle} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {ScrollView} from 'react-native';

interface CusotmeSafeAreaViewProps {
  children: ReactNode;
}

const CustomSafeAreaView: FC<CusotmeSafeAreaViewProps> = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 15,
    flex: 1,
  } as ViewStyle,
});

export default CustomSafeAreaView;
