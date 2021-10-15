import { createSlice } from "@reduxjs/toolkit";
import {  getProfileData } from "./actions";
import { ProfileState } from "./types";

export const initialState: ProfileState = {
  loading: false,
  error: null,
  data: null,
};

const slice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfileData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builder.addCase(getProfileData.rejected, (state, action) => {
      state.error = action.payload as string;
    });

    builder.addCase(getProfileData.pending, (state) => {
      state.loading = true;
    });
  },
});

export const { actions, reducer } = slice;