import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Banner() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Hanan</Text>
      <Image
        source={require("../../assets/Images/man-of-steel-poster-banner.jpg")}
        style={styles.image}
      />
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
    fontFamily: "Roboto",
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
