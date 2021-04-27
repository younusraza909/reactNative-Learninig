import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';

export const Timming = ({ OnChangeTime }) => {
  return (
    <>
      <View style={styles.timmingButton}>
        <RoundedButton title="10" size={75} onPress={() => OnChangeTime(10)} />
      </View>
      <View style={styles.timmingButton}>
        <RoundedButton title="15" size={75} onPress={() => OnChangeTime(15)} />
      </View>
      <View style={styles.timmingButton}>
        <RoundedButton title="20" size={75} onPress={() => OnChangeTime(20)} />
      </View>
    </>
  );
};

const styles=StyleSheet.create({
  timmingButton:{
    flex:1,
    alignItems:'center'
  }
})