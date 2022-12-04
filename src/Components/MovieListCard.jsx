import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const BASE_URL = "https://image.tmdb.org/t/p/original";
const movieData = {
  adult: false,
  backdrop_path: "/ajztm40qDPqMONaSJhQ2PaNe2Xd.jpg",
  first_air_date: "2022-09-21",
  genre_ids: (3)[(10765, 10759, 10768)],
  id: 83867,
  media_type: "tv",
  name: "Star Wars: Andor",
  origin_country: ["US"],
  original_language: "en",
  original_name: "Star Wars: Andor",
  overview:
    "The tale of the burgeoning rebellion against the Empire and how people and planets became involved. In an era filled with danger, deception and intrigue, Cassian Andor embarks on the path that is destined to turn him into a rebel hero.",
  popularity: 406.651,
  poster_path: "/59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg",
  vote_average: 8.159,
  vote_count: 372,
};
export default function MovieListCard({ movie }) {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={{
            uri:
              BASE_URL + movie.backdrop_path ||
              movie.poster_path ||
              movieData.poster_path,
          }}
          resizeMode={"contain"}
        />
      </View>
      <View>
        <Text style={[styles.text, styles.title]}>
          {movie ? movie.name || movie.title : movieData.name}
        </Text>
        <Text style={[styles.text, styles.subtitle]}>{`Language : ${
          movie ? movie.original_language : movieData.original_language
        }`}</Text>
      </View>
      <TouchableOpacity style={styles.icon}>
        <AntDesign name='playcircleo' size={24} color='#fff' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    marginHorizontal: 5,
    marginVertical: 5,
  },
  imgContainer: {
    width: 170,
    height: 95,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 2,
  },
  text: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
    marginLeft: 4,
  },
  title: {
    fontSize: 14,
    width: 170,
    flexWrap: "wrap",
  },
  subtitle: {
    fontSize: 12,
    color: "#808080",
  },
  icon: {
    position: "absolute",
    right: 15,
  },
});
