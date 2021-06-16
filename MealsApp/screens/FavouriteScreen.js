import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FavouriteScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>this is favourite Screen</Text>
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
