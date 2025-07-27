import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Platform,
  Dimensions,
  Image,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import ListenPlayer from '../ListenPlayer';

const BhajanScreen = () => {
  const navigation = useNavigation();
  const device_h = Dimensions.get('window').height;
  const refRBSheet = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const DATA = [
  {
    id: '1',
    url: 'https://www.chosic.com/wp-content/uploads/2021/07/The-Epic-Hero-Epic-Cinematic-Keys-of-Moon-Music.mp3',
    title: 'Keys of Moon',
    artist: 'The Epic Hero',
    artwork: 'https://picsum.photos/id/1003/200/300',
  },
  {
    id: '2',
    url: 'https://www.chosic.com/wp-content/uploads/2021/07/Raindrops-on-window-sill.mp3',
    title: 'Raindrops on Window Sill',
    artist: 'Chosic',
    artwork: 'https://picsum.photos/id/10/200/300',
  },
  {
    id: '3',
    url: 'https://www.chosic.com/wp-content/uploads/2021/07/The-Epic-Hero-Epic-Cinematic-Keys-of-Moon-Music.mp3',
    title: 'Keys of Moon',
    artist: 'The Epic Hero',
    artwork: 'https://picsum.photos/id/1003/200/300',
  },
  {
    id: '4',
    url: 'https://www.chosic.com/wp-content/uploads/2021/07/Raindrops-on-window-sill.mp3',
    title: 'Raindrops on Window Sill',
    artist: 'Chosic',
    artwork: 'https://picsum.photos/id/10/200/300',
  },
  {
    id: '5',
    url: 'https://www.chosic.com/wp-content/uploads/2021/07/The-Epic-Hero-Epic-Cinematic-Keys-of-Moon-Music.mp3',
    title: 'Keys of Moon',
    artist: 'The Epic Hero',
    artwork: 'https://picsum.photos/id/1003/200/300',
  },
  {
    id: '6',
    url: 'https://www.chosic.com/wp-content/uploads/2021/07/Raindrops-on-window-sill.mp3',
    title: 'Raindrops on Window Sill',
    artist: 'Chosic',
    artwork: 'https://picsum.photos/id/10/200/300',
  },
  {
    id: '7',
    url: 'https://www.chosic.com/wp-content/uploads/2021/07/The-Epic-Hero-Epic-Cinematic-Keys-of-Moon-Music.mp3',
    title: 'Keys of Moon',
    artist: 'The Epic Hero',
    artwork: 'https://picsum.photos/id/1003/200/300',
  },
  {
    id: '8',
    url: 'https://www.chosic.com/wp-content/uploads/2021/07/Raindrops-on-window-sill.mp3',
    title: 'Raindrops on Window Sill',
    artist: 'Chosic',
    artwork: 'https://picsum.photos/id/10/200/300',
  },
  {
    id: '9',
    url: 'https://www.chosic.com/wp-content/uploads/2021/07/The-Epic-Hero-Epic-Cinematic-Keys-of-Moon-Music.mp3',
    title: 'Keys of Moon',
    artist: 'The Epic Hero',
    artwork: 'https://picsum.photos/id/1003/200/300',
  },
  {
    id: '10',
    url: 'https://www.chosic.com/wp-content/uploads/2021/07/Raindrops-on-window-sill.mp3',
    title: 'Raindrops on Window Sill',
    artist: 'Chosic',
    artwork: 'https://picsum.photos/id/10/200/300',
  },
];

  const handlePlayPress = (index) => {
    setSelectedIndex(index);
    refRBSheet.current.open();
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/Partern33.jpg')} resizeMode="cover" style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(255,255,255,0.8)',
            ...Platform.select({
              ios: {
                shadowColor: 'rgba(0,0,0,0.5)',
                shadowRadius: 1,
                shadowOpacity: 0.5,
                shadowOffset: { width: 0, height: 1 },
              },
              android: {
                elevation: 5,
              },
            }),
          }}
        >
          <ImageBackground
            source={require('../../assets/cloud_background.png')}
            style={{
              width: '100%',
              height: device_h > 1000 ? device_h / 2.8 : device_h > 800 ? device_h / 3.2 : device_h / 2.7,
              ...Platform.select({
                ios: {
                  shadowColor: 'rgba(0,0,0,0.5)',
                  shadowRadius: 1,
                  shadowOpacity: 0.5,
                  shadowOffset: { width: 0, height: 1 },
                },
                android: {
                  elevation: 5,
                },
              }),
            }}
          >
            <TouchableOpacity style={{ zIndex: 1 }} onPress={() => navigation.goBack()}>
              <Image
                style={{
                  width: '8%',
                  height: '16%',
                  marginTop: device_h > 1000 ? device_h / 12.7 : device_h > 800 ? device_h / 12.7 : device_h / 14.8,
                  tintColor: '#000',
                  marginLeft: 10,
                }}
                source={require('../../assets/back.png')}
              />
            </TouchableOpacity>
          </ImageBackground>

          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', position: 'absolute', marginTop: device_h > 1000 ? device_h / 4.3 : device_h > 800 ? device_h / 7.4 : device_h / 7.8 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: 130, height: 185, backgroundColor: 'rgba(255,255,255,0.7)', marginLeft: 20, borderRadius: 5, elevation: 8 }}>
                <Image
                  style={{ width: 130, height: 185, borderRadius: 5, position: 'absolute' }}
                  source={require('../../assets/bhajaGovinda.jpg')}
                />
              </View>
              <View style={{ width: '60%', alignItems: 'flex-start' }}>
                <Text style={{ color: '#000', fontSize: 25, fontWeight: 'bold', fontFamily: 'Saira-Medium', marginLeft: '5%', marginTop: '45%' }}>
                  Bhajaan
                </Text>
              </View>
            </View>
          </View>

          <View style={{ height: '60%', width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '5%' }}>
            <FlatList
              data={DATA}
              style={{
                borderColor: '#b0b0b0',
                borderWidth: 1,
                borderRadius: 10,
                width: '90%',
                height: device_h / 4.5,
                marginTop: '10%',
                marginBottom: 5,
                ...Platform.select({
                  ios: {
                    shadowColor: 'rgba(0,0,0,0.5)',
                    shadowRadius: 1,
                    shadowOpacity: 0.5,
                    shadowOffset: { width: 0, height: 1 },
                  },
                  android: {
                    elevation: 8,
                  },
                }),
              }}
              bounces={true}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <View style={{ alignItems: 'center' }}>
                  <View style={{ width: '100%', borderBottomWidth: 0.5, borderBottomColor: '#b0b0b0', backgroundColor: '#ffefd5', height: 60, padding: 10, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={{ color: '#111', fontFamily: 'Saira-Medium', marginLeft: 15 }}>{item.title}</Text>
                    <TouchableOpacity style={{ width: 50, height: 30, justifyContent: 'center', alignItems: 'center', marginRight: 10 }} onPress={() => handlePlayPress(index)}>
                      <Image
                        style={{ width: 20, height: 25, borderRadius: 5 }}
                        source={require('../../assets/play.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />

            <RBSheet
              ref={refRBSheet}
              height={600}
              customStyles={{
                wrapper: { backgroundColor: 'rgba(0,0,0,0.8)' },
                container: {
                  backgroundColor: '#ffefd5',
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  padding: 16,
                },
                draggableIcon: { backgroundColor: '#000' },
              }}
              customModalProps={{
                animationType: 'fade',
                statusBarTranslucent: true,
              }}
              customAvoidingViewProps={{
                enabled: false,
              }}
            >
              <ListenPlayer trackList={DATA} initialTrackIndex={selectedIndex} />
            </RBSheet>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default BhajanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
