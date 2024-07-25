import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/slices/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* Your app content here */}
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
});
