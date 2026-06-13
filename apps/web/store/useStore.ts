import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  id: string | null;
  name: string | null;
  email: string | null;
  streak: number;
  xp: number;
  level: number;
}

interface AppState {
  user: UserState;
  isOnboarded: boolean;
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setUser: (user: Partial<UserState>) => void;
  completeOnboarding: () => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      user: {
        id: null,
        name: null,
        email: null,
        streak: 0,
        xp: 0,
        level: 1,
      },
      isOnboarded: false,
      theme: 'system',
      setTheme: (theme) => set({ theme }),
      setUser: (userUpdate) => set((state) => ({ user: { ...state.user, ...userUpdate } })),
      completeOnboarding: () => set({ isOnboarded: true }),
    }),
    {
      name: 'apex-storage',
    }
  )
);
