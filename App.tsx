import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StackNav from './src/navigation';


const App = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});