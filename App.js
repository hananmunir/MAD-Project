import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Navigation from "./src/Components/Navigation";
import ListScreen from "./src/Screens/ListScreen";
import RecentShowsScreen from "./src/Screens/RecentShowsScreen";
import { Entypo } from "@expo/vector-icons";

//Tab Navigator in React Native
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          tabBarStyle: {
            backgroundColor: "#000",
            borderTopColor: "#808080",
            paddingBottom: 10,
            paddingTop: 10,
            height: 80,
          },
          tabBarActiveTintColor: "#EB1D36",
          tabBarInactiveTintColor: "#808080",
        }}
      >
        {/* Add Stack Navigator */}
        <Tab.Screen
          name='Home'
          component={Navigation}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Entypo name='home' size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name='Recent'
          component={RecentShowsScreen}
          options={{
            tabBarLabel: "Recent",
            tabBarIcon: ({ color, size }) => (
              <Entypo name='list' size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name='List'
          component={ListScreen}
          options={{
            tabBarLabel: "List",
            tabBarIcon: ({ color, size }) => (
              <Entypo name='list' size={size} color={color} />
            ),
          }}
        />
        {/* <Tab.Screen name='Settings' component={SettingsScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
