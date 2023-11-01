import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  id: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});
export default userSlice.reducer;
export const { setToken, setId } = userSlice.actions;
