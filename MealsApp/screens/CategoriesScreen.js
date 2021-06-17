import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  //Fucntion to return styling into component bcz spread operator is not wroking
  const tileStyle = (color) => {
    return {
      flex: 1,
      backgroundColor: color,
      borderRadius: 10,
      shadowColor: "black",
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 10,
      padding: 15,
      elevation: 3,
      justifyContent: "flex-end",
      alignItems: "flex-end",
    };
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Meal Categories",
    });
  }, [navigation]);
  const renderGridItem = (renderItem) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() =>
          navigation.navigate("CategoriesMeals", { catId: renderItem.item.id })
        }>
        <View style={tileStyle(renderItem.item.color)}>
          <Text style={styles.title} numberOfLines={2}>
            {renderItem.item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
      keyExtractor={(item, index) => item.id}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "right",
  },
});
