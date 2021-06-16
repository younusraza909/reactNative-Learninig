import React from "react";
import { Text, View, StyleSheet } from "react-native";
import color from "../Constants/Colors";

const Headers = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    backgroundColor: color.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontFamily: "open-sans-bold",
    color: "black",
    fontSize: 24,
  },
});

export default Headers;
