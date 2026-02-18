import { create } from 'zustand';

interface IAppState {
  count: number;
  increment: () => void;
  reset: () => void;
}

export const useAppStore = create<IAppState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}));
