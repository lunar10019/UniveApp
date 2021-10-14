export interface ChatsState {
  loading: boolean;
  error: null | string;
  data: null | Chat[];
}

export interface Chat {
  id: string;
  unreadMessagesCount: number;
  user: {
    avatar: string;
    name: string;
  };
  messages: [
    {
      date: string;
      value: string;
    }
  ];
}
