import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./components/Headers";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFont = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [round, setRound] = useState(0);
  const [loadData, setLoadData] = useState(false);

  if (!loadData) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => setLoadData(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const configureNewGame = () => {
    setUserNumber(null);
    setRound(0);
  };

  const startGameHandler = (number) => {
    setUserNumber(number);
  };
  const gameOverHandler = (numberOfRounds) => {
    setRound(numberOfRounds);
  };

  let content = <StartGameScreen gameHandler={startGameHandler} />;
  if (userNumber && round <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (round > 0) {
    content = (
      <GameOver
        onGameRestart={configureNewGame}
        numberOfRounds={round}
        userNumber={userNumber}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <Header title='Guess The Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
