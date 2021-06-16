import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game Is Over</Text>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/success.png")} style={styles.image} />
      </View>
      <Text>Number Of Rounds Taken:{props.numberOfRounds}</Text>
      <Text>Actual Number:{props.userNumber}</Text>
      <Button title='RESTART GAME' onPress={props.onGameRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOver;
