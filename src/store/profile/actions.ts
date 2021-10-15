import { createAsyncThunk } from "@reduxjs/toolkit";
import getT from 'next-translate/getT'


const API = {
  getUser:
    "https://6167232d13aa1d00170a69d3.mockapi.io/profile/1",
};

export const getProfileData = createAsyncThunk<any>(
  "profile/getProfileData",
  async (_, { rejectWithValue }) => {
    const t = await getT('en', 'common')
    try {
      const response = await fetch(
        `${API.getUser}`
      ).then((r) => r.json());
      return response;
    } catch (err) {
      return rejectWithValue(t("errorText"));
    }
  }
);