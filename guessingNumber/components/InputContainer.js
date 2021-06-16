import React from "react";
import { Text, View, StyleSheet } from "react-native";
import color from "../Constants/Colors";

const InputContainer = (props) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    borderColor: color.secondary,
    borderWidth: 3,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  number: {
    fontSize: 20,
    color: color.secondary,
  },
});

export default InputContainer;
