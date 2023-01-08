import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

export const ListSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addToList: (state, action) => {
      console.log("Here");
      state.movies = [...state.movies, action.payload];
    },
    removeFromList: (state, action) => {
      console.log(action.payload);
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToList, removeFromList } = ListSlice.actions;
export const selectListMovies = (state) => state.list.movies;

export default ListSlice.reducer;
