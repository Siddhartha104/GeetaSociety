import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, StatusBar,FlatList, TouchableOpacity, Platform, Dimensions, Image } from 'react-native';
import Shadow from 'react-native-simple-shadow-view';

const BhajanScreen = () =>{
    const navigation = useNavigation();
    const device_h = Dimensions.get('window').height;
    const DATA = [
  {
    title: 'Track name',
  },
  {
    title: 'Track name',
  },
  {
    title: 'Track name',
  },
  {
    title: 'Track name',
  },
  {
    title: 'Track name',
  },
  {
    title: 'Track name',
  },
  {
    title: 'Track name',
  },
  {
    title: 'Track name',
  },
  {
    title: 'Track name',
  },
  {
    title: 'Track name',
  },
];
    return(
             <View style={styles.container}>
             <ImageBackground source={require('../../assets/Partern33.jpg')} resizeMode="cover" style={{flex:1,justifyContent:'center'}}>
            <View
          style={{
            flex: 1,
         
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
                elevation: 5,
              },
            }),
            backgroundColor: 'rgba(255,255,255,0.8)',
          }}>
             <ImageBackground
            source={require('../../assets/cloud_background.png')}
            style={{width: '100%', height: device_h>1000?device_h/2.8:device_h>800?device_h/3.2:device_h/2.7, ...Platform.select({
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
                elevation: 5,
              },
            }),}}>
            <TouchableOpacity style={{zIndex:1}}
            onPress={() => navigation.goBack()}
            >
              <Image
                style={{
                  width: '8%',
                  height: '16%',
                  marginTop: device_h>1000?device_h/12.7:device_h>800?device_h/12.7:device_h/14.8,
                  tintColor: '#000',
                  marginLeft: 10,
                  
                }}
                source={require('../../assets/back.png')}
              /> 
              
            </TouchableOpacity>
            </ImageBackground>
            <View style={{width:'100%',flexDirection: 'row',borderWidth:0,borderColor:'red',
              justifyContent:'flex-start',alignItems:'center',position:'absolute',
              marginTop:device_h>1000?device_h/4.3:device_h>800?device_h/7.4:device_h/7.8}}>
                <View style={{alignItems:'flex-start', flexDirection:'row'}}>
                <Shadow
                    style={{
                      width: 130,
                      height: 185,
                      padding: 0,
                      shadowColor: '#000',
                      shadowOpacity: 0.5,
                      shadowRadius: 3,
                      shadowOffset: {width: 1, height: 8.0},
                      backgroundColor: 'rgba(255,255,255,0.7)',
                      marginLeft: 20,
                      borderRadius: 5,
                    }}>
                  <Image
                    style={{
                      width: 130,
                      height: 185,
                      borderRadius: 5,
                      position: 'absolute',
                    }}
                   source={require('../../assets/bhajaGovinda.jpg')}
                  />
                  </Shadow>
                {/* </View>
                <View style={{flex: 0.5, alignItems: 'flex-start'}}> */}
                <View style={{width:"60%", alignItems: 'flex-start'}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#000000',
                      fontSize: 25,
                      fontWeight: 'bold',
                      fontFamily: 'Saira-Medium',
                      marginLeft: '5%',
                      marginTop:'45%'
                      
                    }}>
                    Bhajaan
                  </Text>
                  </View>
                </View>
              </View>

         <View style={{height:'60%',width:'100%',justifyContent:'center',alignItems:'center',marginTop:'5%'}}>
                  <FlatList
                
                 data={DATA}
                style={{
                  //marginLeft: '6%',
                  borderColor:'#b0b0b0',
                  borderWidth:1,
                  borderRadius:10,
                  width: '90%',
                  height: device_h/4.5,
                //  backgroundColor: 'white',

                  marginTop: "10%", 
                  marginBottom: 5,
                  // ...Platform.select({
                  //   ios: {
                  //     shadowColor: 'rgba(0,0,0,0.5)',
                  //     shadowRadius: 1,
                  //     shadowOpacity: 0.5,
                  //     shadowOffset: {
                  //       width: 0,
                  //       height: 1,
                  //     },
                  //   },
                  //   android: {
                  //     elevation: 8,
                  //   },
                  // }),
              }}
              bounces={true}
                showsVerticalScrollIndicator={false}
                //contentContainerStyle={{gap:10}}
                renderItem={({item, index}) => (
                  <View style={{alignItems: 'center'}}>
                    <View
                      style={{
                        width: '100%',
                        borderBottomWidth:0.5,
                        borderBottomColor:'#b0b0b0',
                        
                        
                        
                        // backgroundColor: '#FFFFFF',
                         backgroundColor:'#ffefd5',
                         height: 60,
                            padding:10,
                            justifyContent:'space-between',
                            alignItems:'center',
                            flexDirection:'row'
                      }}>
                       
  
                          
                            <Text
                              style={{
                                color: '#111',
                                fontFamily: 'Saira-Medium',
                                marginLeft: 15,
                              }}>
                              {item.title}
                            </Text>
                            <TouchableOpacity style={{width:50,height:30,justifyContent:'center',alignItems:'center',marginRight:10}}>
                            <Image
                      style={{width: 20, height: 25, borderRadius: 5}}
                      source={
                        // this.state.playerStatus == 3
                        //   ? require('./../../assets/pause.png')
                        //   : this.state.playerStatus == 2
                          //? 
                          require('../../assets/play.png')
                         // : null
                      }
                    />
                    </TouchableOpacity>
                          
                         
                        </View>
                      
                     
                    
                  </View>
                )}
                keyExtractor={(item) => item.id}
              />
              </View>
          </View>
                </ImageBackground>
                </View>
           
           

    )
}
export default BhajanScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
