import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { auth } from "../utils/firebase";
import React from "react";

//facebook icon
import { FontAwesome, Feather } from "react-native-vector-icons";

let userModal = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Auth() {
  const [user, setUser] = React.useState(userModal);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(true);

  const handleRegister = () => {
    console.log("Register");
    console.log(user);
    setUser(userModal);
    auth
      .createUserWithEmailAndPassword(user.email.trim(), user.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user.email);
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLogin = () => {
    console.log("Login");
    setUser(userModal);
    auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then((user) => {
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.heading]}>
          {isLogin ? "Hello Again!" : "New Here?"}{" "}
        </Text>
        <Text style={[styles.text, styles.subHeading]}>
          {isLogin
            ? " Welcome back you've been missed!"
            : "Sign up to get started"}
        </Text>
      </View>
      <View>
        {!isLogin ? (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder='Username'
              keyboardType='ascii-capable'
              onChangeText={(text) => setUser({ ...user, username: text })}
              value={user.username}
            />
            <FontAwesome name='user-o' color='#000' size={20} />
          </View>
        ) : null}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Email'
            keyboardType='ascii-capable'
            onChangeText={(text) => setUser({ ...user, email: text })}
            value={user.email}
          />
          <FontAwesome name='user-o' color='#000' size={20} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Password'
            keyboardType='ascii-capable'
            secureTextEntry={!showPassword}
            onChangeText={(text) => setUser({ ...user, password: text })}
            value={user.password}
          />
          {showPassword ? (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Feather name='eye' color='#000' size={20} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Feather name='eye-off' color='#000' size={20} />
            </TouchableOpacity>
          )}
        </View>
        {!isLogin ? (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder='Confirm Password'
              keyboardType='ascii-capable'
              secureTextEntry={!showConfirmPassword}
              onChangeText={(text) =>
                setUser({ ...user, confirmPassword: text })
              }
              value={user.confirmPassword}
            />
            {showConfirmPassword ? (
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <Feather name='eye' color='#000' size={20} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <Feather name='eye-off' color='#000' size={20} />
              </TouchableOpacity>
            )}
          </View>
        ) : null}
        {isLogin ? (
          <Text style={[styles.text, styles.align]}>Recover Password</Text>
        ) : null}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => (isLogin ? handleLogin() : handleRegister())}
      >
        <Text style={styles.text}>{isLogin ? "Log In" : "Register"}</Text>
      </TouchableOpacity>
      <View style={styles.ruler}>
        <View style={styles.line} />
        <View>
          <Text style={[styles.text, styles.rulerText]}>Or</Text>
        </View>
        <View style={styles.line} />
      </View>
      <View style={styles.iconsContainer}>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/Images/icons/Facebook_Logo_(2019).png")}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/Images/icons/7123025_logo_google_g_icon.png")}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={[
          styles.authRedirection,
          isLogin ? { marginTop: 40 } : { marginTop: 0 },
        ]}
      >
        <Text style={styles.text}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <Text
            style={[styles.text, { color: "#7DE5ED" }]}
            onPress={() => setIsLogin(!isLogin)}
          >
            {isLogin ? " Sign Up" : " Log In"}
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 35,
    marginTop: 90,
    flexDirection: "column",
    height: "85%",
  },
  text: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
  inputContainer: {
    height: 50,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: "#fff",
    color: "#000",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
  },
  heading: {
    fontSize: 30,
    paddingVertical: 5,
  },
  subHeading: {
    maxWidth: "65%",
    flexWrap: "wrap",
    textAlign: "center",
    fontSize: 16,
  },
  textContainer: {
    alignSelf: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 20,
  },
  align: {
    alignSelf: "flex-end",
    marginTop: 13,
  },
  button: {
    backgroundColor: "lightblue",
    padding: 15,
    width: "90%",
    marginVertical: 25,
    textAlign: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
  },
  ruler: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    width: "85%",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.8)",
  },
  rulerText: {
    paddingHorizontal: 15,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "45%",
    alignSelf: "center",
    marginVertical: 20,
  },
  iconContainer: {
    backgroundColor: "rgba(59,60,66,.5)",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    width: 70,
    borderRadius: 10,
  },
  authRedirection: {
    width: "100%",
    alignItems: "center",
    padding: 15,
    alignSelf: "flex-end",
  },
});
