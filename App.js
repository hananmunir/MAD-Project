import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Screens/HomeScreen";
import axios from "./src/utils/axios";
import requests from "./src/utils/requests";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/actor";
import { useEffect } from "react";
import AuthScreen from "./src/Screens/AuthScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Auth' component={AuthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
