import { createAsyncThunk } from "@reduxjs/toolkit";

const API = {
  getSessions:
    "https://6167232d13aa1d00170a69d3.mockapi.io/sessions",
};

export const getSessionsData = createAsyncThunk<any, string>(
  "sessions/getSessionsData",
  async (limit, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${API.getSessions}?sortBy=startDate&order=asc&page=1&limit=${limit}`
      ).then((r) => r.json());
      return response;
    } catch (err) {
      return rejectWithValue("При получении данных произошла ошибка");
    }
  }
);