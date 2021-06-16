import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import color from "../Constants/Colors";
import Input from "../components/Input";
import InputContainer from "../components/InputContainer";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const resetHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const submitHandler = () => {
    if (isNaN(+enteredValue) || +enteredValue <= 0 || +enteredValue > 99) {
      Alert.alert("Invalid Number!", "Number has to be between 1 to 99", [
        { text: "Okay!", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setEnteredValue("");
    setSelectedValue(enteredValue);
    Keyboard.dismiss();
  };
  let confirmedFeedback;
  if (confirmed) {
    confirmedFeedback = (
      <Card style={styles.cardContainer}>
        <Text>Your Selected Number :</Text>
        <InputContainer>{selectedValue}</InputContainer>
        <Button
          title='Start Game'
          onPress={() => props.gameHandler(selectedValue)}
        />
      </Card>
    );
  }

  const inputNumberHandler = (input) => {
    //below expression will convert ant value except 0-9 to null
    setEnteredValue(input.replace(/[^0-9]/g, ""));
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start A New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select A Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit={true}
            autoCapitalize='none'
            maxLength={2}
            autoCorrent={false}
            keyboardType='number-pad'
            onChangeText={inputNumberHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            {/* If we awt color prop to btn it willbe text color for ios and background color for android */}
            <View style={styles.button}>
              <Button
                title='Confirm'
                onPress={submitHandler}
                color={color.primary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title='Clear'
                onPress={resetHandler}
                color={color.secondary}
              />
            </View>
          </View>
        </Card>
        {confirmedFeedback}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 95,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  cardContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGameScreen;
