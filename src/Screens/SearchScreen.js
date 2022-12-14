import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import axios from "../utils/axios";
import requests from "../utils/requests";
import MovieListCard from "../Components/MovieListCard";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const onChangeSearch = (query) => setSearchQuery(query);
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

  const handleSearch = async () => {
    console.log("Going to search");
    const response = await axios.get(requests.fetchSearched + searchQuery);
    console.log("Getting Response");
    setSearchResults(response.data.results);
  };

  return (
    <View
      style={{ backgroundColor: "#000", flex: 1 }}
      onLayout={onLayoutRootView}
    >
      <Searchbar
        placeholder='Search'
        onChangeText={onChangeSearch}
        value={searchQuery}
        onSubmitEditing={handleSearch}
        style={{ backgroundColor: "#000", color: "#fff" }}
        iconColor='#fff'
        inputStyle={{ color: "#fff" }}
        elevation={2}
        placeholderTextColor={"#fff"}
      />

      <ScrollView>
        {searchResults &&
          searchResults.map((movie) => (
            <MovieListCard key={movie.id} movie={movie} />
          ))}
      </ScrollView>
    </View>
  );
}
