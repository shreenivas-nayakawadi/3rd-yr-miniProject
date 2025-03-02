import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
      user: null,
      isAuthenticated: false,
      error: null,
      isLoading: false,

      signup: async (email, password, username) => {
            set({ isLoading: true, error: null });
            try {
                  const response = await axios.post(`${API_URL}/signup`, {
                        username,
                        email,
                        password,
                  });
                  set({
                        user: response.data.user,
                        isAuthenticated: true,
                        isLoading: false,
                  });
            } catch (error) {
                  set({
                        error:
                              error.response.data.message || "Error signing up",
                        isLoading: false,
                  });
                  throw error;
            }
      },

      login: async (email, password) => {
            set({ isLoading: true, error: null });
            try {
                  const response = await axios.post(`${API_URL}/login`, {
                        email,
                        password,
                  });
                  set({
                        isAuthenticated: true,
                        user: response.data.user,
                        error: null,
                        isLoading: false,
                  });
                  console.log(response.data.user);
            } catch (error) {
                  set({
                        error:
                              error.response?.data?.message ||
                              "Error logging in",
                        isLoading: false,
                  });
                  throw error;
            }
      },

      logout: async () => {
            set({ isLoading: true, error: null });
            try {
                  await axios.post(`${API_URL}/logout`);
                  set({
                        user: null,
                        isAuthenticated: false,
                        error: null,
                        isLoading: false,
                  });
            } catch (error) {
                  set({ error: "Error logging out", isLoading: false });
                  throw error;
            }
      },
}));
