import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function UserImage({ user }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Images/1a48c51d-0b4f-45c6-981d-85c2418e6f74.jpg")}
        style={styles.image}
      />
      <Text style={[styles.text, styles.title]}>{user.displayName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 75,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    color: "#fff",
  },
  title: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: "semi-bold",
  },
});
