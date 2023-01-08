import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const userData = {
  username: "Hanan Munir",
  email: "hananmunir@gmail.com",
  password: "1234568900",
};
export default function EditDetails({ user }) {
  const [loggedInUser, setLoggedInUser] = useState(user);
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.inputText, styles.label]}>Email</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={loggedInUser?.email}
            style={styles.inputText}
            onChangeText={(text) =>
              setLoggedInUser({ ...loggedInUser, email: text })
            }
          />
        </View>
      </View>
      <View>
        <Text style={[styles.inputText, styles.label]}>Username</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={loggedInUser?.displayName}
            style={styles.inputText}
            onChangeText={(text) =>
              setLoggedInUser({ ...loggedInUser, displayName: text })
            }
          />
        </View>
      </View>
      <View>
        <Text style={[styles.inputText, styles.label]}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={loggedInUser.password}
            style={styles.inputText}
            secureTextEntry={true}
            onChangeText={(text) =>
              setLoggedInUser({ ...loggedInUser, password: text })
            }
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  inputContainer: {
    marginTop: 8,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#808080",
    borderColor: "#fff",
    color: "#000",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 5,
  },
  buttonContainer: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 20,
  },
  button: {
    backgroundColor: "#EB1D36",
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  text: { color: "#fff", fontFamily: "Poppins_400Regular", fontSize: 20 },
  inputText: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
    fontSize: 20,
    width: "100%",
  },
  label: {
    fontSize: 16,
    color: "#808080",
  },
});
