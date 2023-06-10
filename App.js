import * as React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./screens/HomeScreen";
import VegetableScreen from "./screens/Vegetables";
import FruitsScreen from "./screens/Fruits";
import AnimalScreen from "./screens/Animals";


const AppSwitchNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  VegetableScreen: VegetableScreen,
  FruitsScreen: FruitsScreen,
  AnimalScreen: AnimalScreen,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);




export default function App() {

  return <AppNavigator />;
}