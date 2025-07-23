import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, StatusBar, TouchableOpacity, Platform, Dimensions, Image } from 'react-native';

const SlokeScreen = () =>{
     const navigation = useNavigation();
        const device_h = Dimensions.get('window').height;
    return(
       <ImageBackground
        source={require('../../assets/Partern4.jpg')}
        style={{width: '100%', height: '100%' }} resizeMode="repeat">
          {/* <SafeAreaView> */}
        <View style={{flex: 1, backgroundColor: 'rgba(255,255,255,0.5)'}}>
            <View style={{flex: 1}}>
              
              <View
                style={{
                  paddingTop:device_h>1000?device_h/30.7:device_h>800?device_h/30.7:device_h/60.8,
                  flexDirection: 'row',
                  backgroundColor: 'orange',
                  width: '100%',
                  height: '11%',
                  justifyContent: 'space-between',
                  ...Platform.select({
                    ios: {
                      shadowColor: 'rgba(0,0,0,0.5)',
                      shadowRadius: 1,
                      shadowOpacity: 0.5,
                      shadowOffset: {
                        width: 0,
                        height: 1,
                      },
                    },
                    android: {
                      elevation: 8,
                    },
                  }),
                }}>
                <View style={{flex: 0.33}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
              {/* <Image style={{ width: '20%', height: '22%', marginLeft: 20, marginTop: 48, tintColor: '#fff' }} source={require('./../../assets/back.png')} /> */}
              <Image
                style={{
                  width: '22%',
                  height: '28%',
                  marginTop: 33,
                  tintColor: '#fff',
                  marginLeft: 10,
                }}
                source={require('../../assets/back.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.34, alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: 'Elektra Medium Pro',
                fontSize: 21,
                marginTop: 31,
                color: '#fff',
             
              }}>
              Slokes
            </Text>
          </View>
                <View style={{flex: 0.33}}></View>
              </View>
              </View>
            </View>
            </ImageBackground>

    )
}
export default SlokeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})