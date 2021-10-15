import { createAsyncThunk } from "@reduxjs/toolkit";
import getT from 'next-translate/getT'

const API = {
  getSessions:
    "https://6167232d13aa1d00170a69d3.mockapi.io/sessions",
};

export const getSessionsData = createAsyncThunk<any, string>(
  "sessions/getSessionsData",
  async (limit, { rejectWithValue }) => {
    const t = await getT('en', 'common')
    try {
      const response = await fetch(
        `${API.getSessions}?sortBy=startDate&order=asc&page=1&limit=${limit}`
      ).then((r) => r.json());
      return response;
    } catch (err) {
      return rejectWithValue(t("errorText"));
    }
  }
);