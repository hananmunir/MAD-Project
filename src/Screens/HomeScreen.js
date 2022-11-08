import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Banner from "../Components/Banner";
import requests from "../utils/requests";
import MovieRow from "../Components/MovieRow";
import Navbar from "../Components/Navbar";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Navbar />
      <Banner />

      <MovieRow
        category={"Continue Watching"}
        movies={requests.fetchNetflixOriginals}
      />
      <MovieRow category={"Trending"} movies={requests.fetchTrending} />
      <MovieRow
        category={"Action Movies"}
        movies={requests.fetchActionMovies}
      />
      <MovieRow category={"Horror"} movies={requests.fetchHorrorMovies} />
      <MovieRow category={"Comedy"} movies={requests.fetchComedyMovies} />
      <MovieRow
        category={"Documentaries"}
        movies={requests.fetchDocumentaries}
      />
      <MovieRow category={"Romance"} movies={requests.fetchRomanceMovies} />
      <MovieRow category={"Top Rated"} movies={requests.fetchTopRated} />
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
