import {View, SafeAreaView, StyleSheet, ViewStyle} from 'react-native';
import React, {FC, ReactNode} from 'react';

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
    paddingHorizontal: 20,
    flex: 1,
  } as ViewStyle,
});

export default CustomSafeAreaView;
