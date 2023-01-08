import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import requests from "../utils/requests";
import MovieCard from "../Components/MovieCard";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

export default function RecentShowsScreen() {
  const [recentShows, setRecentShows] = useState();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(requests.fetchNewlyReleased);
      setRecentShows(response.data.results);
    };
    getMovies();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ScrollView
      style={{ backgroundColor: "#000", flex: 1 }}
      onLayout={onLayoutRootView}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {recentShows &&
          recentShows.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} recent />;
          })}
      </View>
    </ScrollView>
  );
}
