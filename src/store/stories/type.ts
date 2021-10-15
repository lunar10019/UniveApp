export interface StoriesState {
    loading: boolean;
    error: null | string;
    data: null | Story[];
  }
  
  export interface Story {
    id: string;
    name: string;
    avatar: string;
  }
  