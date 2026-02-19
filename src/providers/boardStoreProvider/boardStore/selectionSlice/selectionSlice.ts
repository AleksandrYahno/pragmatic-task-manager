import { ImmerBoardStoreSetter } from '../boardStore.interface';
import { ISelectionSlice } from './selectionSlice.interface';

export const selectionSlice = (set: ImmerBoardStoreSetter): ISelectionSlice => ({
  selectedTaskIds: [],

  setSelectedTaskIds: (ids: string[]) => {
    set((state) => {
      state.selectionSlice.selectedTaskIds = ids;
    });
  },
});
