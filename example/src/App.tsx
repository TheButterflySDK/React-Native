import React from 'react';
import { StyleSheet, View } from 'react-native';

import ButterflyButton from 'react-native-butterfly-button';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <ButterflyButton apiKey="<API_KEY>" testMode />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    position: 'absolute',
    top: 300,
    left: 100,
  },
});
