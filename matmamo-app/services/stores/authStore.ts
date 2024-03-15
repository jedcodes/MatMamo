import { create } from "zustand";

interface AuthStoreState {
  user: null | {};
  isAuthenticated: boolean;
  login: (user: {}) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStoreState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));

export default useAuthStore;
