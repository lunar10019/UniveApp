export interface SessionsState {
  loading: boolean;
  error: null | string;
  data: null | Session[];
}

export interface Session {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}
