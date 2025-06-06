import React from 'react';
import { LogBox, StyleSheet, Text, View } from 'react-native';

LogBox.ignoreAllLogs();

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
};

let AppEntryPoint: React.FC = App;

AppEntryPoint = require('./.storybook').default;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppEntryPoint;
