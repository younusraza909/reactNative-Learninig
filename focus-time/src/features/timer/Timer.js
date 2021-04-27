import React, { useState } from 'react';
import { StyleSheet, View, Text, Platform, Vibration } from 'react-native';
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';
import { ProgressBar } from 'react-native-paper';
import { Timming } from './Timming';
import { useKeepAwake } from 'expo-keep-awake';

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();
  const DEFAULT_TIME = 0.1;
  let interval = React.useRef(null);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const onProgress = (progress) => {
    setProgress(progress);
  };

  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  const vibrate = () => {
    if (Platform.OS === 'ios') {
      interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate(10000);
    }
  };

  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          onProgress={onProgress}
          minutes={minutes}
          onEnd={onEnd}
        />
      </View>
      <View style={{ paddingTop: 20 }}>
        <Text style={styles.title}>We are focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
        <View style={{ paddingTop: 10 }}>
          <ProgressBar
            color="#5e84e2"
            style={{ height: 10 }}
            progress={progress}
          />
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Timming OnChangeTime={changeTime} />
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton
            title="Pause"
            onPress={() => {
              setIsStarted(false);
            }}
          />
        ) : (
          <RoundedButton
            title="Start"
            onPress={() => {
              setIsStarted(true);
            }}
          />
        )}
      </View>
      <View style={styles.clearSubject}>
        <RoundedButton
          size={50}
          title="-"
          onPress={() => {
            clearSubject();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
  },
  task: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  clearSubject: {
    paddingBottom: 25,
    paddingLeft:25
  },
  countdown: {
    flex: 0.5,
    textAlign: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
});
