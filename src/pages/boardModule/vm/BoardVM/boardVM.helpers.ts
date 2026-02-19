import { getArrayOfFieldsFromList } from '@helpers/array.helper';
import { IBoardColumn } from '@providers/boardStoreProvider/boardStore/columnsSlice/columnsSlice.interface';
import { IBoardTask } from '@providers/boardStoreProvider/boardStore/tasksSlice/tasksSlice.interface';

export interface ISortedColumnsResult {
  columns: IBoardColumn[];
  columnIds: string[];
}

export const getSortedColumnsAndIds = (
  columns: IBoardColumn[],
): ISortedColumnsResult => {
  const sortedColumns = [...columns].sort(
    (columnA, columnB) => columnA.order - columnB.order,
  );
  const columnIds = getArrayOfFieldsFromList(sortedColumns, 'id');

  return {
    columns: sortedColumns,
    columnIds,
  };
};

/**
 * Groups tasks by columnId and sorts each group by order.
 * Returns a stable structure for passing tasks per column.
 */
export const getTasksByColumnId = (
  tasks: IBoardTask[],
): Record<string, IBoardTask[]> => {
  const byColumnId: Record<string, IBoardTask[]> = {};

  for (const task of tasks) {
    const columnId = task.columnId;

    if (!byColumnId[columnId]) {
      byColumnId[columnId] = [];
    }

    byColumnId[columnId].push(task);
  }

  for (const columnId of Object.keys(byColumnId)) {
    byColumnId[columnId] = [...byColumnId[columnId]].sort(
      (taskA, taskB) => taskA.order - taskB.order,
    );
  }

  return byColumnId;
};
