import React from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';

const HomeScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello Home screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor:'#fff'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
export default HomeScreen