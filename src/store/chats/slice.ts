import { createSlice } from "@reduxjs/toolkit";
import { getChatsData, updateUnreadMessagesCount } from "./actions";
import { ChatsState } from "./types";

export const initialState: ChatsState = {
  loading: false,
  error: null,
  data: null,
};

const slice = createSlice({
  name: "chats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getChatsData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builder.addCase(getChatsData.rejected, (state, action) => {
      state.error = action.payload as string;
    });

    builder.addCase(getChatsData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(updateUnreadMessagesCount.fulfilled, (state, action) => {
      const id = action.meta.arg;
      const chat = state.data?.find((chat) => chat.id === id);
      chat!.unreadMessagesCount = 0;
    });
  },
});

export const { actions, reducer } = slice;
