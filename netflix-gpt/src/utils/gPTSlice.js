import { createSlice } from "@reduxjs/toolkit";

const gPTSlice = createSlice({
  name: "gptSlice",
  initialState: {
    showGPTSearch: false,
    gptMovies: null,
    tmdbResult: null,
  },
  reducers: {
    toggleGPTSearch: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovies: (state, action) => {
      const { gptMoviesResult, tmdbResult } = action.payload;
      state.gptMovies = gptMoviesResult;
      state.tmdbResult = tmdbResult;
    },
  },
});

export const { toggleGPTSearch, addGPTMovies } = gPTSlice.actions;

export default gPTSlice.reducer;
