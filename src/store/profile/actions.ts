import { createAsyncThunk } from "@reduxjs/toolkit";

const API = {
  getUser:
    "https://6167232d13aa1d00170a69d3.mockapi.io/profile/1",
};

export const getProfileData = createAsyncThunk<any>(
  "profile/getProfileData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${API.getUser}`
      ).then((r) => r.json());
      return response;
    } catch (err) {
      return rejectWithValue("При получении данных произошла ошибка");
    }
  }
);