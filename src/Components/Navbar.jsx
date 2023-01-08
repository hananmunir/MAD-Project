import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/EvilIcons";
import { auth } from "../utils/firebase";

export default function Navbar() {
  const navigator = useNavigation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("option1");

  useEffect(() => {
    setShowDropdown(false);
  }, []);
  const handleEditClick = () => {
    setShowDropdown(!showDropdown);
  };
  const handleSearchClick = () => {
    navigator.navigate("Search");
  };
  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={handleEditClick}>
        <Image
          source={require("../../assets/Images/1a48c51d-0b4f-45c6-981d-85c2418e6f74.jpg")}
          style={styles.image}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logo}
          resizeMode={"contain"}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSearchClick}>
        <Icon name='search' style={styles.icon} />
      </TouchableOpacity>
      {showDropdown && (
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={
              selectedOption === "Edit Profile"
                ? styles.selectedOption
                : styles.option
            }
            onPress={() => navigator.navigate("Edit Profile")}
          >
            <Text style={styles.optionText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selectedOption === "Logout"
                ? styles.selectedOption
                : styles.option
            }
            onPress={() => auth.signOut()}
          >
            <Text style={styles.optionText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
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
  menuContainer: {
    flexDirection: "column",
    position: "absolute",
    top: 100,
    left: 15,
    zIndex: 3,
    elevation: 3, // works on android
  },
  option: {
    backgroundColor: "#fff",
    padding: 10,
    zIndex: 3,
    elevation: 3,
  },

  optionText: {
    color: "#000",
    fontSize: 15,
    zIndex: 3,
    elevation: 3,
    fontFamily: "Poppins_400Regular",
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
  text: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
  logo: {
    width: 120,
    height: 40,
  },
  icon: {
    color: "#fff",
    fontSize: 40,
  },
});
