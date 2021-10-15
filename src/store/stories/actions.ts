import { createAsyncThunk } from "@reduxjs/toolkit";
import getT from 'next-translate/getT'

const API = {
  stories:
    "https://6167232d13aa1d00170a69d3.mockapi.io/stories",
};

export const getStoriesData = createAsyncThunk<any>(
  "stories/getStoriesData",
  async (_, { rejectWithValue }) => {
    const t = await getT('en', 'common')
    try {
      const response = await fetch(
        `${API.stories}`
      ).then((r) => r.json());
      return response;
    } catch (err) {
      return rejectWithValue(t("errorText"));
    }
  }
);