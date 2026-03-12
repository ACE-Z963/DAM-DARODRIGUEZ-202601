import React from "react";
import { Text, View } from "react-native";
import { stylesHomeScreen } from "./HomeScreen.style";

export const HomeScreen: React.FC = () => {
  return (
    <View style={stylesHomeScreen.container}>
      <Text style={stylesHomeScreen.text}>Hello World</Text>
    </View>
  );
};