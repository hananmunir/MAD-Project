import { View, Text } from "react-native";
import React from "react";
import Auth from "../Components/Auth";

export default function AuthScreen() {
  return (
    <View style={{ backgroundColor: "#010101", height: "100%" }}>
      <Auth />
    </View>
  );
}
