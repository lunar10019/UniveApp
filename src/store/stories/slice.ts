import { createSlice } from "@reduxjs/toolkit";
import { getStoriesData,  } from "./actions";
import { StoriesState } from "./type";

export const initialState: StoriesState = {
  loading: false,
  error: null,
  data: null,
};

const slice = createSlice({
  name: "stories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStoriesData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builder.addCase(getStoriesData.rejected, (state, action) => {
      state.error = action.payload as string;
    });

    builder.addCase(getStoriesData.pending, (state) => {
      state.loading = true;
    });
  },
});

export const { actions, reducer } = slice;