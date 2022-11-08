import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/EvilIcons";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Images/1a48c51d-0b4f-45c6-981d-85c2418e6f74.jpg")}
        style={styles.image}
      />
      <Text style={styles.text}>Logo</Text>

      <TouchableOpacity>
        <Icon name='search' style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
  text: {
    color: "#fff",
  },
  icon: {
    color: "#fff",
    fontSize: 40,
  },
});
