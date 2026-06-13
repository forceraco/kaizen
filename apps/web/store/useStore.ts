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

interface Ritual {
  id: number;
  title: string;
  type: string;
  time: string;
  completed: boolean;
}

interface Habit {
  id: string;
  name: string;
  streak: number;
}

interface AppState {
  user: UserState;
  isOnboarded: boolean;
  isAgeVerified: boolean;
  theme: 'light' | 'dark' | 'system';
  rituals: Ritual[];
  habits: Habit[];
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setUser: (user: Partial<UserState>) => void;
  completeOnboarding: () => void;
  verifyAge: () => void;
  toggleRitual: (id: number) => void;
  addHabit: (name: string) => void;
  removeHabit: (id: string) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      user: {
        id: 'user_1',
        name: 'Георгій',
        email: 'georgiy@example.com',
        streak: 12,
        xp: 1250,
        level: 14,
      },
      isOnboarded: false,
      isAgeVerified: false,
      theme: 'system',
      rituals: [
        { id: 1, title: '10-хв медитація фокусу', type: 'Mind', time: '10 хв', completed: true },
        { id: 2, title: 'Тренування: верх тіла', type: 'Body', time: '40 хв', completed: false },
        { id: 3, title: 'Урок: мова тіла', type: 'Academy', time: '5 хв', completed: false },
        { id: 4, title: 'Звичка: холодний душ', type: 'Habit', time: '2 хв', completed: false },
      ],
      habits: [
        { id: '1', name: 'Холодний душ', streak: 12 },
        { id: '2', name: 'Читання 20 хв', streak: 5 },
        { id: '3', name: 'Планування дня', streak: 8 },
      ],
      setTheme: (theme) => set({ theme }),
      setUser: (userUpdate) => set((state) => ({ user: { ...state.user, ...userUpdate } })),
      completeOnboarding: () => set({ isOnboarded: true }),
      verifyAge: () => set({ isAgeVerified: true }),
      toggleRitual: (id) => set((state) => ({
        rituals: state.rituals.map(r => r.id === id ? { ...r, completed: !r.completed } : r)
      })),
      addHabit: (name) => set((state) => ({
        habits: [...state.habits, { id: Math.random().toString(36).substr(2, 9), name, streak: 0 }]
      })),
      removeHabit: (id) => set((state) => ({
        habits: state.habits.filter(h => h.id !== id)
      })),
    }),
    {
      name: 'apex-storage',
    }
  )
);
