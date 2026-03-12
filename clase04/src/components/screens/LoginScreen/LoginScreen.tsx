import React from "react";
import { Text, View } from "react-native";
import { stylesLoginScreen } from "./LoginScreen.style";

export const LoginScreen: React.FC = () => {
  return (
    <View style={stylesLoginScreen.container}>
      <Text style={stylesLoginScreen.text}>Login Screen</Text>
    </View>
  );
};
