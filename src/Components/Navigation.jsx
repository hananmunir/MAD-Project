import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import MovieScreen from "../Screens/MovieScreen";
import AuthScreen from "../Screens/AuthScreen";
import SearchScreen from "../Screens/SearchScreen";
import EditScreen from "../Screens/EditScreen";
import { getUser } from "../Features/UserSlice";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  const [isLogin, setIsLogin] = React.useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setIsLogin(user);
    });
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000",
          borderBottomColor: "#000",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          // fontFamily: "Poppins_400Regular",
        },
        headerTitleAlign: "center",
      }}
    >
      {isLogin ? (
        <>
          <Stack.Screen
            name='Landing'
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name='Edit Profile' component={EditScreen} />
          <Stack.Screen name='Movie' component={MovieScreen} />
          <Stack.Screen name='Search' component={SearchScreen} />
        </>
      ) : (
        <Stack.Screen
          name='Auth'
          component={AuthScreen}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
