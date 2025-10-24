import { create } from "zustand";

interface AdminUser {
  firstName: string;
  lastName: string;
  email: string;
  staffId: string;
  role: string;
  avatar?: string;
}

interface AdminAuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: AdminUser | null;
  setToken: (token: string) => void;
  setUser: (user: AdminUser) => void;
  logout: () => void;
}

export const useAdminAuth = create<AdminAuthState>((set) => ({
  token:
    typeof window !== "undefined" ? localStorage.getItem("admin_token") : null,
  isAuthenticated: !!(
    typeof window !== "undefined" && localStorage.getItem("admin_token")
  ),
  user: null,
  setToken: (token) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("admin_token", token);
    }

    console.log("Admin token set:", { token });

    set({ token, isAuthenticated: true });
  },
  setUser: (user) => set({ user }),
  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("admin_token");
    }
    set({ token: null, isAuthenticated: false, user: null });
  },
}));
