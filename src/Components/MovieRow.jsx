import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import MovieCard from "./MovieCard";

export default function MovieRow({ category }) {
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
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
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
  },
});
