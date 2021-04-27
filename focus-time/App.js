import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Platform, AsyncStorage } from 'react-native';
import { Focus } from './src/features/focus/focus';
import { Timer } from './src/features/timer/Timer';
import { FocusHistory } from './src/features/focus/focusHistory';

const STATUSES = {
  COMPLETE: 1,
  CANCELLED: 2,
};
export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const onClear = () => {
    setFocusHistory([]);
  };

  const addFocusSubjectHistoryStatus = (Subject, Status) => {
    setFocusHistory([
      ...focusHistory,
      {
        Subject,
        Status,
      },
    ]);
  };

  const saveFocusHistory = async () => {
    try {
      AsyncStorage.setItem('focusHistory', JSON.stringify(focusHistory));
    } catch (e) {
      console.log(e);
    }
  };

  const loadFocusHistory = async () => {
    try {
      const history = AsyncStorage.getItem('focusHistory');
      if (history && JSON.stringify(history)) {
        setFocusHistory(JSON.stringify(history));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadFocusHistory();
  }, []);

  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory]);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            addFocusSubjectHistoryStatus(focusSubject, STATUSES.COMPLETE);
            setFocusSubject(null);
          }}
          clearSubject={() => {
            addFocusSubjectHistoryStatus(focusSubject, STATUSES.CANCELLED);
            setFocusSubject(null);
          }}
        />
      ) : (
        <>
          <Focus addSubject={setFocusSubject} />
          <FocusHistory focusHistory={focusHistory} onClear={onClear} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 16 : 25,
    backgroundColor: '#252250',
  },
});
