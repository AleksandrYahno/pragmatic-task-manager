import { useMemo } from 'react';

import { IBoardActions } from './useBoardActions.interface';
import useBoardStoreProvider from '../useBoardStoreProvider';

export const useBoardActions = (): IBoardActions => {
  const { boardStore } = useBoardStoreProvider();

  return useMemo(() => {
    const getStore = (): ReturnType<typeof boardStore.getState> =>
      boardStore.getState();

    return {
      addColumn: (title: string) => getStore().columnsSlice.addColumn(title),
      removeColumn: (columnId: string) =>
        getStore().columnsSlice.removeColumn(columnId),
      reorderColumns: (columnIds: string[]) =>
        getStore().columnsSlice.reorderColumns(columnIds),
      addTask: (columnId: string, title: string) =>
        getStore().tasksSlice.addTask(columnId, title),
      removeTask: (taskId: string) => getStore().tasksSlice.removeTask(taskId),
      updateTask: (taskId: string, payload: { title?: string }) =>
        getStore().tasksSlice.updateTask(taskId, payload),
      setTaskCompleted: (taskId: string, completed: boolean) =>
        getStore().tasksSlice.setTaskCompleted(taskId, completed),
      reorderTasksInColumn: (columnId: string, taskIds: string[]) =>
        getStore().tasksSlice.reorderTasksInColumn(columnId, taskIds),
      moveTaskToColumn: (taskId: string, targetColumnId: string) =>
        getStore().tasksSlice.moveTaskToColumn(taskId, targetColumnId),
      toggleTaskSelection: (taskId: string) =>
        getStore().selectionSlice.toggle(taskId),
      selectAllInColumn: (columnId: string) =>
        getStore().selectionSlice.selectAllInColumn(columnId),
      clearSelection: () => getStore().selectionSlice.clear(),
      setEditingTaskId: (taskId) =>
        getStore().boardUISlice.setEditingTaskId(taskId),
    };
  }, [boardStore]);
};
