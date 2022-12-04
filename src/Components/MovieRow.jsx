import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import axios from "../utils/axios";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
export default function MovieRow({ category, movies }) {
  const [movieList, setMovieList] = React.useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(movies);
      setMovieList(response.data.results.slice(0, 10));
    };
    getMovies();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}> {category}</Text>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 15,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {movieList?.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    padding: 20,
    paddingTop: 10,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
  },
});
