const API_KEY = "23588a5ffea12900e26311eb7decfb72";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchNewlyReleased: `/discover/movie?api_key=${API_KEY}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`,
  fetchSearched: `/search/movie?api_key=${API_KEY}&query=`,
  fetchLatest: `/movie/latest?api_key=${API_KEY}&language=en-US`,
};

export default requests;
