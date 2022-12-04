import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";
const BASE_URL = "https://image.tmdb.org/t/p/original";
// const movie = {
//   backdrop_path: "/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
//   first_air_date: "2016-07-15",
//   genre_ids: (3)[(18, 10765, 9648)],
//   id: 66732,
//   name: "Stranger Things",
//   origin_country: ["US"],
//   original_language: "en",
//   original_name: "Stranger Things",
//   overview:
//     "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
//   popularity: 500.182,
//   poster_path: "/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
//   vote_average: 8.6,
//   vote_count: 14395,
// };
export default function MovieDetails() {
  // use route
  const route = useRoute();
  const movie = route.params.movie;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: BASE_URL + movie.backdrop_path }}
        resizeMode={"contain"}
      />
      <Text style={[styles.text, styles.heading]}>
        {movie.name || movie.title}
      </Text>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(0,0,0,0)", "rgba(0,0,0,.7)", "rgba(0,0,0,1)"]}
        style={styles.fadeBanner}
      />
      <View style={styles.reviewContainer}>
        <View style={styles.IMDB}>
          <Text style={styles.imdbText}>IMDB 7.0</Text>
        </View>
        <AntDesign name='star' size={16} color='#e7ab02' />
        <Text style={styles.review}>{movie.vote_average}</Text>
        <Text style={styles.reviewCount}>{`(${
          (movie.vote_count / 1000).toFixed(0) + "k reviews"
        })`}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.text, styles.airDate]}>
          Air Date: {movie.first_air_date}
        </Text>
        <Text style={[styles.text, styles.language]}>
          Language: {movie.original_language}
        </Text>
      </View>
      <Text style={[styles.text, styles.subHeading]}>{movie.overview}</Text>
      <View style={styles.genreList}>
        <Text style={[styles.text, styles.genre]}>Action</Text>
        <Text style={[styles.text, styles.genre]}>Comedy</Text>
        <Text style={[styles.text, styles.genre]}>Horror</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}> Add To List </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.watchNow]}>
          <Text style={[styles.text, { color: "#EB1D36" }]}>Watch Now </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    height: "100%",
    widdth: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  reviewContainer: {
    display: "flex",
    width: "50%",
    flexDirection: "row",
    padding: 5,
    marginTop: 20,
    marginLeft: 20,
    alignItems: "center",
  },
  IMDB: {
    backgroundColor: "#e7ab02",
    height: 25,
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginRight: 10,
  },
  imdbText: {
    fontSize: 10,
    fontWeight: "600",
  },
  review: {
    color: "#e7ab02",
    marginLeft: 5,
    marginRight: 2.7,
  },
  reviewCount: {
    fontSize: 9,
    color: "#f1f1f1",
    marginLeft: 2,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    marginLeft: 22,
    marginTop: 15,
  },
  language: {
    color: "#808080",
  },
  airDate: {
    color: "#808080",
  },
  text: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
  heading: {
    position: "absolute",
    top: "20%",
    left: "5%",
    fontSize: 24,
    fontWeight: "bold",
  },
  subHeading: {
    color: "#808080",
    marginHorizontal: 20,
    marginVertical: 15,
    fontSize: 12,
  },
  image: {
    width: "100%",
    height: "30%",
    top: 0,
  },
  fadeBanner: {
    height: 80,
    position: "absolute",
    top: "22%",
    width: "100%",
  },
  genreList: {
    display: "flex",
    flexDirection: "row",
    width: "75%",
    marginLeft: 20,
    height: 40,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  genre: {
    color: "#fff",
    backgroundColor: "rgba(17,17,17,1)",
    padding: 7,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  btnContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
  },
  btn: {
    backgroundColor: "#EB1D36",
    width: "80%",
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 10,
  },
  watchNow: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#EB1D36",
  },
});
