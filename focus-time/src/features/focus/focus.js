import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';

export const Focus = ({ addSubject }) => {
  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          What would you like to foucs on?
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: 10 }}
            // onSubmitEditing={({ nativeEvent }) => {
            //   setTmpItem(nativeEvent.text);
            // }}
            onSubmitEditing={(event) => setFocusSubject(event.nativeEvent.text)}
          />
          <RoundedButton
            title="+"
            size={50}
            onPress={() => {
              addSubject(focusSubject);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    marginTop: 66,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 19,
  },
  inputContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
