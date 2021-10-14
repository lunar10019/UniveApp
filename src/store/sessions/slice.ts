import { createSlice } from "@reduxjs/toolkit";
import { getSessionsData } from "./actions";
import { SessionsState } from "./types";

export const initialState: SessionsState = {
  loading: false,
  error: null,
  data: null,
};

const slice = createSlice({
  name: "sessions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSessionsData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builder.addCase(getSessionsData.rejected, (state, action) => {
      state.error = action.payload as string;
    });

    builder.addCase(getSessionsData.pending, (state) => {
      state.loading = true;
    });
  },
});

export const { actions, reducer } = slice;
