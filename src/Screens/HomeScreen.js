import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Banner from "../Components/Banner";
import MovieRow from "../Components/MovieRow";
import Navbar from "../Components/Navbar";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Navbar />
      <Banner />

      <MovieRow category={"Continue Watching"} />
      <MovieRow category={"Trending"} />
      <MovieRow category={"New Arrivals"} />
      <MovieRow category={"Horror"} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "rgba(0,0,0,1)",

    color: "#fff",
    flexDirection: "column",
  },
});
