import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealScreen = ({ route, navigation }) => {
  let { catId } = route.params;

  const selectedCategory = CATEGORIES.find((cat) => {
    return cat.id === catId;
  });
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedCategory.title,
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Text>This is Category Meal Screen</Text>
      <Text>{selectedCategory.title}</Text>
    </View>
  );
};

export default CategoryMealScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
