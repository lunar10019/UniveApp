export interface ProfileState {
    loading: boolean;
    error: null | string;
    data: null | Profile;
  }
  
  export interface Profile {
    id: string;
    firstName: string;
    lastName: string;
    role: string;
    avatar: string;
  }
  