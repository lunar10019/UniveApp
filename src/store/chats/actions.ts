import { createAsyncThunk } from "@reduxjs/toolkit";

const API = {
  chats:
    "https://6167232d13aa1d00170a69d3.mockapi.io/chats",
};

export const getChatsData = createAsyncThunk<any, string>(
  "chats/getChatsData",
  async (limit, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${API.chats}`
      ).then((r) => r.json());
      return response;
    } catch (err) {
      return rejectWithValue("При получении данных произошла ошибка");
    }
  }
);

export const updateUnreadMessagesCount = createAsyncThunk<any, string>(
    "chats/updateUnreadMessagesCount",
    async (id, { rejectWithValue }) => {

      try {
        const response = await fetch(
          `${API.chats}/${id}`, {method: "put"}
        ).then((r) => r.json());
        return response;
      } catch (err) {
        return rejectWithValue("При получении данных произошла ошибка");
      }
    }
  );