import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";

export default function App() {
  const [inputGoal, setinputGoal] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [Goals, setGoals] = useState([]);

  const inputGoalHandler = (e) => {
    setinputGoal(e);
  };

  const onSubmitHandler = () => {
    setGoals([...Goals, { key: Math.random().toString(), value: inputGoal }]);
    setinputGoal("");
    setModalVisible(!modalVisible);
  };

  const deleteHandler = (id) => {
    setGoals(Goals.filter((goal) => goal.key !== id));
  };

  const clearHandler = () => {
    setModalVisible(!modalVisible);
    setinputGoal("");
  };
  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 20, marginBottom: 50 }}>
        <Button title='Show' onPress={() => setModalVisible(!modalVisible)} />
      </View>
      <Modal animationType='slide' visible={modalVisible}>
        <View style={styles.InputContainer}>
          <TextInput
            placeholder='Input Your Course Goals'
            style={styles.inputField}
            value={inputGoal}
            onChangeText={inputGoalHandler}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "30%",
            }}>
            <Button title='Add' onPress={onSubmitHandler} />
            <Button title='Clear' onPress={clearHandler} />
          </View>
        </View>
      </Modal>
      <FlatList
        data={Goals}
        renderItem={({ item }) => (
          <View style={styles.ItemGoal}>
            <TouchableOpacity onLongPress={() => deleteHandler(item.key)}>
              <Text style={{ textAlign: "center" }}>{item.value}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
  },
  InputContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  inputField: {
    borderWidth: 1,
    padding: 10,
    margin: 4,
    width: "85%",
  },
  ItemGoal: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    textAlign: "center",
  },
});
