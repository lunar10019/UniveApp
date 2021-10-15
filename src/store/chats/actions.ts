import { createAsyncThunk } from "@reduxjs/toolkit";
import getT from 'next-translate/getT'

const API = {
  chats:
    "https://6167232d13aa1d00170a69d3.mockapi.io/chats",
};

export const getChatsData = createAsyncThunk<any>(
  "chats/getChatsData",
  async (_, { rejectWithValue }) => {
    const t = await getT('en', 'common')
    try {
      const response = await fetch(
        `${API.chats}`
      ).then((r) => r.json());
      return response;
    } catch (err) {
      return rejectWithValue(t("errorText"));
    }
  }
);

export const updateUnreadMessagesCount = createAsyncThunk<any, string>(
    "chats/updateUnreadMessagesCount",
    async (id, { rejectWithValue }) => {
      const t = await getT('en', 'common')
      try {
        const response = await fetch(
          `${API.chats}/${id}`, {method: "put"}
        ).then((r) => r.json());
        return response;
      } catch (err) {
        return rejectWithValue(t("errorText"));
      }
    }
  );