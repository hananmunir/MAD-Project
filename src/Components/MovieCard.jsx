import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function MovieCard({ movie }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/Images/images.jpg")}
        resizeMode='cover'
      />
      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.heading]}>
          {movie.title || movie.name}
        </Text>
        <Text style={[styles.text, styles.subHeading]}>
          {movie.overview.slice(0, 30)}...
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
  },
  heading: {
    fontSize: 17,
    fontWidth: "bold",
  },
  subHeading: {
    fontSize: 12,
    color: "gray",
    marginBottom: 20,
  },
});
