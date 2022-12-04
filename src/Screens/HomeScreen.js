import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Banner from "../Components/Banner";
import requests from "../utils/requests";
import MovieRow from "../Components/MovieRow";
import Navbar from "../Components/Navbar";
import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
export default function App() {
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
    <ScrollView style={styles.container} onLayout={onLayoutRootView}>
      <Navbar />
      <Banner />
      <MovieRow
        category={"Continue Watching"}
        movies={requests.fetchNetflixOriginals}
      />
      <MovieRow category={"Trending"} movies={requests.fetchTrending} />
      <MovieRow
        category={"Action Movies"}
        movies={requests.fetchActionMovies}
      />
      <MovieRow category={"Horror"} movies={requests.fetchHorrorMovies} />
      <MovieRow category={"Comedy"} movies={requests.fetchComedyMovies} />
      <MovieRow
        category={"Documentaries"}
        movies={requests.fetchDocumentaries}
      />
      <MovieRow category={"Romance"} movies={requests.fetchRomanceMovies} />
      <MovieRow category={"Top Rated"} movies={requests.fetchTopRated} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "rgba(0,0,0,1)",

    color: "#fff",
    flexDirection: "column",
  },
});
