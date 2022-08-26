import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./screens/Login";
import { CarteScreen } from "./screens/Carte";
import PaymentScreen from "./screens/Payment";
import OrdersScreen from "./screens/Orders";
import { ScreenNavigationTypes } from "./types/ScreenNavigationTypes";

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
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Carte" component={CarteScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Orders" component={OrdersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
