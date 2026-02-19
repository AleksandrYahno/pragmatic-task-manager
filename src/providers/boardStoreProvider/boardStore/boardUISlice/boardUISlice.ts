import { ImmerBoardStoreSetter } from '../boardStore.interface';
import { IBoardUISlice } from './boardUISlice.interface';

export const boardUISlice = (set: ImmerBoardStoreSetter): IBoardUISlice => ({
  editingTaskId: null,

  setEditingTaskId: (taskId) => {
    set((state) => {
      state.boardUISlice.editingTaskId = taskId;
    });
  },
});
