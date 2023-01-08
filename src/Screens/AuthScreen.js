import React from "react";
import { View, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import Auth from "../Components/Auth";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();
export default function AuthScreen() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View
      style={{ backgroundColor: "#010101", height: "100%" }}
      onLayout={onLayoutRootView}
    >
      <Auth />
    </View>
  );
}
