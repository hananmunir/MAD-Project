import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const BASE_URL = "https://image.tmdb.org/t/p/original/";
export default function MovieCard({ movie, recent }) {
  const navigator = useNavigation();

  const getMovieName = () => {
    if (movie.name) {
      return movie.name?.length > 17 ? movie.name?.split(" ")[0] : movie.name;
    } else {
      return movie.title?.length > 17
        ? movie.title?.split(":")[0] < 15
          ? movie.title?.split(":")[0]
          : movie.title?.split(" ")[0]
        : movie.title;
    }
  };
  const handleClick = () => {
    if (recent) {
      console.log("recent");
      navigator.navigate("Home", {
        screen: "Movie",
        initial: false,
      });
    } else {
      navigator.navigate("Movie", { movie });
    }
  };
  return (
    <TouchableOpacity
      style={[styles.container, recent && styles._containerIsRecent]}
      onPress={handleClick}
    >
      <Image
        style={styles.image}
        source={{
          uri: BASE_URL + movie?.poster_path,
        }}
        resizeMode='center'
      />

      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.heading]}>{getMovieName()}</Text>
        <Text style={[styles.text, styles.subHeading]}>
          {movie.overview.slice(0, 40)}...
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "rgba(17,17,17,1)",
    display: "flex",
    textAlign: "right",
    marginLeft: 8,
    marginRight: 8,
    height: "100%",
    borderRadius: 30,
  },
  _containerIsRecent: {
    height: 300,
    marginVertical: 8,
  },
  image: {
    width: 180,
    height: 200,
    borderRadius: 30,
    marginBottom: 20,
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  text: {
    color: "#fff",
    textAlign: "left",
    alignSelf: "center",
    width: 140,
    fontFamily: "Poppins_400Regular",
  },
  heading: {
    fontSize: 17,
    fontWidth: "bold",
  },
  subHeading: {
    fontSize: 12,
    color: "gray",
    marginBottom: 10,
  },
});
