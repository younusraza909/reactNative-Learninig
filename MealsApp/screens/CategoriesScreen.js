import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button
        title='Go To Category Meal Screen'
        onPress={() => {
          navigation.navigate("CategoriesMeals");
        }}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
