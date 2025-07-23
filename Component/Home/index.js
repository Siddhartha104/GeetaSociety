import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="orange" />
      <ImageBackground
        source={require('../../assets/home_background.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Bhajan')}>
             <LinearGradient
    colors={['#FFD700', '#FFA500']}
    style={styles.button1}
  >
            <Text style={styles.buttonText}>Bhajaan</Text>
            </LinearGradient>
          </TouchableOpacity>

         <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Sloke')}>
             <LinearGradient
    colors={['#FFD700', '#FFA500']}
    style={styles.button1}
  >
            <Text style={styles.buttonText}>Slokes</Text>
            </LinearGradient>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    width: '100%',
    paddingHorizontal: 20,
    gap: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
   button1: {
    width: '100%',
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
});

export default HomeScreen;
