import React, { useState, useRef, useEffect } from "react";
import { Text, View, StyleSheet, Button, Alert, FlatList } from "react-native";
import InputContianer from "../components/InputContainer";
import Card from "../components/Card";

const generateRandomNumber = (min, max, excluded) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndmNumer = Math.floor(Math.random() * (max - min)) + min;
  if (rndmNumer === excluded) {
    return generateRandomNumber(min, max, excluded);
  } else {
    return rndmNumer;
  }
};

const renderListItem = (listLength, itemData) => (
  <View style={styles.listItem}>
    <Text>#{listLength - itemData.index}</Text>
    <Text>{itemData.item}</Text>
  </View>
);

const GameScreen = (props) => {
  const initialGuess = generateRandomNumber(1, 100, props.userChoice);
  const [guessNumber, setGuessNumber] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

  //constants made by use Ref is always fixes and will not change on rerender of component
  const currentHigh = useRef(100);
  const currentLow = useRef(1);

  const { userChoice, onGameOver } = props;
  useEffect(() => {
    if (+guessNumber === +userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [guessNumber, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && guessNumber < props.userChoice) ||
      (direction === "greater" && guessNumber > props.userChoice)
    ) {
      Alert.alert("Don't Cheat", "You know its wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = guessNumber;
    } else {
      currentLow.current = guessNumber;
    }
    const nextNumber = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      guessNumber
    );
    setGuessNumber(nextNumber);
    setPastGuesses((curPastGuesses) => [
      nextNumber.toString(),
      ...curPastGuesses,
    ]);
  };
  return (
    <View style={styles.screen}>
      <Text>Oppenent's Guess:</Text>
      <InputContianer>{guessNumber}</InputContianer>
      <Card style={styles.ButtonContainer}>
        <Button title='LOWER' onPress={nextGuessHandler.bind(this, "lower")} />
        <Button
          title='GREATER'
          onPress={nextGuessHandler.bind(this, "greater")}
        />
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
        </ScrollView> */}
        <FlatList
          keyExtractor={(item) => item}
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  ButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 300,
    maxWidth: "80%",
    marginTop: 20,
  },
  listContainer: {
    flex: 1,
    width: "60%",
  },
  list: {
    flexGrow: 1,
    // alignItems: 'center',
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default GameScreen;
