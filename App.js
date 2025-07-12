import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainNavigation from './Navigation/MainNavigation';

const App = () => {
  useEffect(() => {
  const timeout = setTimeout(() => {
    SplashScreen.hide(); // 👈 Hides the splash after 3 seconds
  }, 3000);

  return () => clearTimeout(timeout); // cleanup if unmounts early
}, []);
  return (
   <View style={{ flex: 1 }}>
            <MainNavigation />
          </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default App;
