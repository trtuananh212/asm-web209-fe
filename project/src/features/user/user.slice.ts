import { createSlice } from "@reduxjs/toolkit";

export const initialState = [];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;
export const userReducer = userSlice.reducer;
