import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  short: false,
  saveSearch: "",
  saveShort: false,
  moviesRedux: [],
};
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    clearSearch: (state, action) => {
      state.search = "";
    },
    setShort: (state, action) => {
      state.short = action.payload;
    },
    setSaveSearch: (state, action) => {
      state.saveSearch = action.payload;
    },
    setSaveShort: (state, action) => {
      state.saveShort = action.payload;
    },
    setMoviesRedux: (state, action) => {
      state.moviesRedux = action.payload;
    },
    clearReduxSearch: (state, action) => {
      state.search = "";
      state.short = false;
      state.saveSearch = "";
      state.saveShort = false;
      state.moviesRedux = [];
    },
  },
});
export default searchSlice.reducer;
export const {
  setSearch,
  clearSearch,
  setShort,
  clearReduxSearch,
  setSaveSearch,
  setSaveShort,
  setMoviesRedux,
} = searchSlice.actions;
