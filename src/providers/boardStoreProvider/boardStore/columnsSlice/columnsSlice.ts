import { ImmerBoardStoreSetter } from '../boardStore.interface';
import { IBoardColumn, IColumnsSlice } from './columnsSlice.interface';

export const columnsSlice = (set: ImmerBoardStoreSetter): IColumnsSlice => ({
  columns: [],

  setColumns: (columns: IBoardColumn[]) => {
    set((state) => {
      state.columnsSlice.columns = columns;
    });
  },
});
