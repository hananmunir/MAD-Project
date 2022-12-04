import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Screens/HomeScreen";
import MovieScreen from "../Screens/MovieScreen";
import AuthScreen from "../Screens/AuthScreen";
import SearchScreen from "../Screens/SearchScreen";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#000",
            borderBottomColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name='Landing'
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name='Movie' component={MovieScreen} />
        <Stack.Screen name='Auth' component={AuthScreen} />
        <Stack.Screen name='Search' component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
