import axios from "axios";
import { create } from "zustand";
import { User } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined in the environment variables.");
}

// Define the store state interface

interface UserStore {
  user: Partial<User>;
  isloading: boolean;
  error: string | null;
  toast: string | null;
  userData: Partial<User>;
  updateUserData: (newData: Partial<User>) => void;
  createUser: () => Promise<void>;
  loginUser: (credentials: { email: string; password: string }) => Promise<void>;
  sendVerificationEmail: (email: string) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, newPassword: string) => Promise<void>;
  changePassword: (oldPassword: string, newPassword: string) => Promise<void>;
}

export const useUserStore = create<UserStore>((set, get) => ({
  user: {},
  isloading: false,
  error: null,
  toast: null,
  userData: {},

  updateUserData: (newData: Partial<User>) =>
    set((state) => ({
      userData: { ...state.userData, ...newData },
    })),

  createUser: async () => {
    const { userData } = get();
    set({ isloading: true });
    try {
      const response = await axios.post(`${API_URL}/auth/register`, userData);
      set({ user: response.data, isloading: false });
      console.log(userData);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      set({ error: errorMessage, isloading: false });
      console.log(userData);
    }
  },

  loginUser: async (credentials: { email: string; password: string }) => {
    set({ isloading: true });
    try {
      const response = await axios.post(
        `${API_URL}/auth/login`,
        {
          email: credentials.email,
          password: credentials.password,
        }
      );
      set({ user: response.data, isloading: false });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
        console.log(credentials)
      set({ error: errorMessage, isloading: false });
    }
  },

  sendVerificationEmail: async (email: string) => {
    set({ isloading: true });
    try {
      const response = await axios.post(`${API_URL}/auth/verify-email`, {
        email,
      });
      set({ user: response.data, isloading: false });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      set({ error: errorMessage, isloading: false });
    }
  },



  //forgot password
  forgotPassword: async (email: string) =>{
    set({ isloading: true });
    try {
      const response = await axios.post(`${API_URL}/auth/forgot-password`, {
        email,
      });
      set({ user: response.data, isloading: false });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      set({ error: errorMessage, isloading: false });
    }
  },

  //resetPassword
  resetPassword: async (token: string, newPassword: string) => {
    set({ isloading: true });
    try {
      const response = await axios.post(`${API_URL}/auth/reset-password`, {
        token,
        newPassword,
      });
      set({ user: response.data, isloading: false });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      set({ error: errorMessage, isloading: false });
    }
  }
,

  //change password
  changePassword: async (oldPassword: string, newPassword: string) => {
    set({ isloading: true });
    try {
      const response = await axios.post(`${API_URL}/auth/change-password`, {
        oldPassword,
        newPassword,
      });
      set({ user: response.data, isloading: false });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      set({ error: errorMessage, isloading: false });
    }
  }
  
}));
