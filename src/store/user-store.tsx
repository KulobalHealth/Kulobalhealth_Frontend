import axios from "axios";
import { create } from "zustand";
import { User } from "./types";

// Define the store state interface
interface UserStore {
  user: Partial<User>;
  isloading: boolean;
  error: string | null;
  toast: string | null;
  userData: Partial<User>;
  updateUserData: (newData: Partial<User>) => void;
  createUser: () => Promise<void>;
  loginUser: (email: string, password: string) => Promise<void>;
  sendVerificationEmail: (email: string) => Promise<void>;
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
      const response = await axios.post("/pharmacy/auth/register", userData);
      set({ user: response.data, isloading: false });
      console.log(userData);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      set({ error: errorMessage, isloading: false });
      console.log(userData);
    }
  },

  loginUser: async (email: string, password: string) => {
    set({ isloading: true });
    try {
      const response = await axios.post("/pharmacy/auth/login", {
        email,
        password,
      });
      set({ user: response.data, isloading: false });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      set({ error: errorMessage, isloading: false });
    }
  },

  sendVerificationEmail: async (email: string) => {
    set({ isloading: true });
    try {
      const response = await axios.post("/pharmacy/auth/verify-email", {
        email,
      });
      set({ user: response.data, isloading: false });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      set({ error: errorMessage, isloading: false });
    }
  },

  //Verifying the email
}));
