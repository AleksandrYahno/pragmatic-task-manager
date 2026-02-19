import {
  getArrayOfFieldsFromList,
  manageItemStateIntoArray,
} from '@helpers/array.helper';
import { ImmerBoardStoreSetter } from '../boardStore.interface';
import { ISelectionSlice } from './selectionSlice.interface';

export const selectionSlice = (set: ImmerBoardStoreSetter): ISelectionSlice => ({
  selectedTaskIds: [],

  setSelectedTaskIds: (ids: string[]) => {
    set((state) => {
      state.selectionSlice.selectedTaskIds = ids;
    });
  },

  toggle: (taskId: string) => {
    set((state) => {
      state.selectionSlice.selectedTaskIds = manageItemStateIntoArray(
        state.selectionSlice.selectedTaskIds,
        taskId,
      );
    });
  },

  selectAllInColumn: (columnId: string) => {
    set((state) => {
      const tasksInColumn = state.tasksSlice.tasks.filter(
        (task) => task.columnId === columnId,
      );
      state.selectionSlice.selectedTaskIds = getArrayOfFieldsFromList(
        tasksInColumn,
        'id',
      );
    });
  },

  clear: () => {
    set((state) => {
      state.selectionSlice.selectedTaskIds = [];
    });
  },
});
