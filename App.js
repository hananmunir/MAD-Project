import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { store } from "./src/utils/store";
import { Provider } from "react-redux";
import Navigation from "./src/Components/Navigation";
import ListScreen from "./src/Screens/ListScreen";
import RecentShowsScreen from "./src/Screens/RecentShowsScreen";
import { ToastProvider } from "react-native-toast-notifications";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//Tab Navigator in React Native
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ToastProvider offsetTop={50}>
        <Provider store={store}>
          <Tab.Navigator
            // initialRouteName='Home'
            payload={true}
            screenOptions={{
              headerStyle: {
                backgroundColor: "#000",
                //fontFamily: "Poppins_400Regular",
              },
              headerTintColor: "#fff",
              tabBarStyle: {
                backgroundColor: "#000",
                borderTopColor: "#808080",
                paddingBottom: 6,
                paddingTop: 6,
                height: 50,
              },
              headerTitleAlign: "center",
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
                  <Entypo name='home' size={18} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name='Recent'
              component={RecentShowsScreen}
              options={{
                tabBarLabel: "Recent",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name='play-box-multiple-outline'
                    size={18}
                    color={color}
                  />
                ),
              }}
            />

            <Tab.Screen
              name='List'
              component={ListScreen}
              options={{
                tabBarLabel: "List",
                tabBarIcon: ({ color, size }) => (
                  <Entypo name='list' size={18} color={color} />
                ),
              }}
            />
            {/* <Tab.Screen name='Settings' component={SettingsScreen} /> */}
          </Tab.Navigator>
        </Provider>
      </ToastProvider>
    </NavigationContainer>
  );
}
