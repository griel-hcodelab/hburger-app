import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { LoginScreen } from "./screens/Login";
import CarteScreen from "./screens/Carte";

export default function App() {
  const [loaded] = useFonts({
    Podkova: require("./assets/fonts/podkova.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const Stack = createNativeStackNavigator<ScreenNavigationTypes>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Carte" component={CarteScreen} />
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
