import {
  filterOutBySet,
  getArrayOfFieldsFromList,
  getNextOrderValue,
  removeItemById,
} from '@helpers/array.helper';
import { ImmerBoardStoreSetter } from '../boardStore.interface';
import { IBoardColumn, IColumnsSlice } from './columnsSlice.interface';

export const columnsSlice = (set: ImmerBoardStoreSetter): IColumnsSlice => ({
  columns: [],

  setColumns: (columns: IBoardColumn[]) => {
    set((state) => {
      state.columnsSlice.columns = columns;
    });
  },

  addColumn: (title: string) => {
    set((state) => {
      const columns = state.columnsSlice.columns;
      state.columnsSlice.columns.push({
        id: crypto.randomUUID(),
        title,
        order: getNextOrderValue(columns),
      });
    });
  },

  removeColumn: (columnId: string) => {
    set((state) => {
      state.columnsSlice.columns = removeItemById(
        state.columnsSlice.columns,
        columnId,
        'id',
      );
      const tasksInColumn = state.tasksSlice.tasks.filter(
        (task) => task.columnId === columnId,
      );
      const removedTaskIds = getArrayOfFieldsFromList(tasksInColumn, 'id');
      state.tasksSlice.tasks = removeItemById(
        state.tasksSlice.tasks,
        columnId,
        'columnId',
      );
      state.selectionSlice.selectedTaskIds = filterOutBySet(
        state.selectionSlice.selectedTaskIds,
        removedTaskIds,
      );
    });
  },

  reorderColumns: (columnIds: string[]) => {
    set((state) => {
      const columnsById = new Map(
        state.columnsSlice.columns.map((column) => [column.id, column]),
      );
      state.columnsSlice.columns = columnIds
        .map((columnId, index) => {
          const column = columnsById.get(columnId);
          if (!column) return null;
          column.order = index;

          return column;
        })
        .filter((column): column is IBoardColumn => column !== null);
    });
  },
});
