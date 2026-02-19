import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { IBoardStore, ImmerBoardStoreSetter } from './boardStore.interface';
import { boardUISlice } from './boardUISlice/boardUISlice';
import { columnsSlice } from './columnsSlice/columnsSlice';
import { tasksSlice } from './tasksSlice/tasksSlice';
import { selectionSlice } from './selectionSlice/selectionSlice';
import { searchFilterSlice } from './searchFilterSlice/searchFilterSlice';

const isDevMode = import.meta.env.DEV;

const boardStore = (set: ImmerBoardStoreSetter): IBoardStore => ({
  boardUISlice: boardUISlice(set),
  columnsSlice: columnsSlice(set),
  tasksSlice: tasksSlice(set),
  selectionSlice: selectionSlice(set),
  searchFilterSlice: searchFilterSlice(set),

  hydrateBoard: (payload) => {
    set((state) => {
      state.columnsSlice.columns = payload?.columns ?? [];
      state.tasksSlice.tasks = payload?.tasks ?? [];
    });
  },
});

const baseStore = immer(boardStore);

export const boardStoreInitializer = devtools(baseStore, {
  name: 'BoardStore',
  enabled: isDevMode,
});
