import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { HomeScreen, LoginScreen } from "./components";

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#1F2937" }}>
        <ScrollView>
          <LoginScreen />
          <HomeScreen />
          <HomeScreen />
          <HomeScreen />
          <HomeScreen />
          <HomeScreen />
          <LoginScreen />
          <HomeScreen />
          <HomeScreen />
          <HomeScreen />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;