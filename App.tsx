import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello, World!</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
