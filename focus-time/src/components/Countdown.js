import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MinToMillis = (mins) => mins * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes = 0.6, isPaused ,onProgress,onEnd }) => {
  const [millis, setMillis] = useState(null);
  const min = Math.floor(millis / 1000 / 60) % 60;
  const sec = Math.floor(millis / 1000) % 60;
  const interval=React.useRef(null)
  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current)
        onEnd()
        return time;
      }
      const timeLeft = time - 1000;
      onProgress(timeLeft/MinToMillis(minutes))
      return timeLeft;
    });
  };

  useEffect(() => {
    if (isPaused) {
      if(interval.current) clearInterval(interval.current)
      return;
    }
     interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused,minutes]);

  useEffect(()=>{
    setMillis(MinToMillis(minutes))
  },[minutes])

  return (
    <Text style={styles.text}>
      {formatTime(min)}:{formatTime(sec)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 70,
    fontWeight: 'bold',
    color: 'white',
    padding: 30,
    textAlign: 'center',
    backgroundColor: 'rgba(94,132,226,0.3)',
  },
});
