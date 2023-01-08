import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useSelector } from "react-redux";
import MovieListCard from "../Components/MovieListCard";
import { selectListMovies } from "../Features/ListSlice";

export default function ListScreen() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  const movies = useSelector(selectListMovies);
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
      style={{ backgroundColor: "#000", flex: 1 }}
      onLayout={onLayoutRootView}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {movies.length > 0 ? (
          movies.map((movie) => <MovieListCard movie={movie} key={movie.id} />)
        ) : (
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            No Movies in List
          </Text>
        )}
      </ScrollView>
    </View>
  );
}
