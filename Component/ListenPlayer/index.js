import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Sound from 'react-native-sound';
import Slider from '@react-native-community/slider';

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' + secs : secs}`;
};

const ListenPlayer = ({ trackList, initialTrackIndex = 0, onClosePlayer }) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(initialTrackIndex);
  const intervalRef = useRef(null);

  const track = trackList[currentIndex];

  useEffect(() => {
    Sound.setCategory('Playback');

    loadSound();

    return () => {
      if (sound) sound.release();
      clearInterval(intervalRef.current);
    };
  }, [currentIndex]);

  const loadSound = () => {
    if (sound) sound.release();

    const newSound = new Sound(track.url, null, (error) => {
      if (error) {
        console.log('Failed to load sound', error);
        return;
      }
      setDuration(newSound.getDuration());
      setSound(newSound);
      playSound(newSound);
    });
  };

  const playSound = (player) => {
    if (!player) return;

    player.play((success) => {
      if (success) {
        handleNext(); // Automatically go to next track
      } else {
        console.log('Playback failed');
      }
    });

    setIsPlaying(true);
    startProgressTimer(player);
  };

  const pauseSound = () => {
    if (sound && isPlaying) {
      sound.pause();
      setIsPlaying(false);
      clearInterval(intervalRef.current);
    }
  };

  const togglePlayback = () => {
    if (!sound) return;
    if (isPlaying) {
      pauseSound();
    } else {
      playSound(sound);
    }
  };

  const startProgressTimer = (player) => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      player.getCurrentTime((sec) => setPosition(sec));
    }, 500);
  };

  const onSeek = (val) => {
    if (sound) {
      sound.setCurrentTime(val);
      setPosition(val);
    }
  };

  const handleNext = () => {
    if (currentIndex < trackList.length - 1) {
      setCurrentIndex(currentIndex + 1);
      resetPlayerState();
    } else {
      setIsPlaying(false);
      clearInterval(intervalRef.current);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      resetPlayerState();
    }
  };

  const resetPlayerState = () => {
    if (sound) {
      sound.stop(() => {
        setSound(null);
        setPosition(0);
        setIsPlaying(false);
      });
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={
          track?.artwork
            ? { uri: track.artwork }
            : require('../../assets/bhajaGovinda.jpg')
        }
        style={styles.artwork}
      />

      <Text style={styles.title}>{track?.title}</Text>
      <Text style={styles.artist}>{track?.artist}</Text>

      <View style={styles.progressContainer}>
        <Slider
          style={styles.slider}
          value={position}
          minimumValue={0}
          maximumValue={duration}
          minimumTrackTintColor="#000"
          maximumTrackTintColor="#ccc"
          onSlidingComplete={onSeek}
          thumbTintColor='#000'
        />
        <View style={styles.timeRow}>
          <Text style={styles.time}>{formatTime(position)}</Text>
          <Text style={styles.time}>{formatTime(duration)}</Text>
        </View>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity onPress={handlePrevious}>
          <Image
            source={require('../../assets/backward.png')}
            style={styles.controlIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={togglePlayback} style={styles.playBtn}>
          <Image
            source={
              isPlaying
                ? require('../../assets/pause.png')
                : require('../../assets/play.png')
            }
            style={styles.playIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNext}>
          <Image
            source={require('../../assets/forward.png')}
            style={styles.controlIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
  artwork: {
    width: 240,
    height: 240,
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  artist: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  progressContainer: {
    width: '90%',
    alignItems: 'stretch',
    marginBottom: 20,
  },
  slider: {
    width: '100%',
    height: 40,
    color:'#000'
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  time: {
    color: '#333',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    gap: 20,
  },
  controlIcon: {
    width: 35,
    height: 35,
    tintColor: '#000',
  },
  playBtn: {
    backgroundColor: '#111',
    padding: 15,
    borderRadius: 40,
  },
   playIcon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
});

export default ListenPlayer;

