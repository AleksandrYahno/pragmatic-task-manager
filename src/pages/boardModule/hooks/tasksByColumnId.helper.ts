import { IBoardTask } from '@providers/boardStoreProvider/boardStore/tasksSlice/tasksSlice.interface';

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
