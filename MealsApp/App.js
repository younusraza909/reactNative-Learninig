import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealScreen from "./screens/CategoryMealScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const fetchFont = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

const Stack = createStackNavigator();

export default function App() {
  const [font, setFont] = useState(false);

  if (!font) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onError={(err) => console.log(err)}
        onFinish={() => setFont(true)}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Categories' component={CategoriesScreen} />
        <Stack.Screen name='CategoriesMeals' component={CategoryMealScreen} />
        <Stack.Screen name='MealDetail' component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
