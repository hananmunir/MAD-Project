import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MovieDetails from "../Components/MovieDetails";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

export default function MovieScreen() {
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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <MovieDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    display: "flex",
    position: "relative",
    flex: 1,
  },
});
