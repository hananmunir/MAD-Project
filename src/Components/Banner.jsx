import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import axios from "../utils/axios";
import requests from "../utils/requests";
import { useNavigation } from "@react-navigation/native";
const BaseURL = "https://image.tmdb.org/t/p/original/";
export default function Banner() {
  const navigator = useNavigation();
  const [user, setUser] = useState(null);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      setUser(user);
    });
  }, [user]);

  useEffect(() => {
    const getMovie = async () => {
      const response = await axios.get(requests.fetchTopRated);
      console.log(response.data.results[0]);
      const randomNumber = Math.floor(
        Math.random() * response.data.results.length
      );
      setMovie(response.data.results[randomNumber]);
    };
    getMovie();
  }, []);

  const handleClick = () => {
    navigator.navigate("Movie", { movie });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, {user?.displayName}</Text>
      <TouchableOpacity onPress={handleClick}>
        <Image
          //source={require("../../assets/Images/man-of-steel-poster-banner.jpg")}
          source={{ uri: BaseURL + movie?.backdrop_path }}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    color: "#fff",
    zIndex: 1,
    elevation: 1,
    fontFamily: "Poppins_400Regular",
    fontSize: 22,
  },
  image: {
    width: "95%",
    height: 130,
    alignSelf: "center",
    borderRadius: 20,
    marginTop: 20,
  },
});
