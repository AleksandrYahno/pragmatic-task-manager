import {
  getItemById,
  getNextOrderValue,
  removeItemById,
  removePrimitiveItem,
} from '@helpers/array.helper';
import { ImmerBoardStoreSetter } from '../boardStore.interface';
import { IBoardTask, ITasksSlice } from './tasksSlice.interface';

export const tasksSlice = (set: ImmerBoardStoreSetter): ITasksSlice => ({
  tasks: [],

  setTasks: (tasks: IBoardTask[]) => {
    set((state) => {
      state.tasksSlice.tasks = tasks;
    });
  },

  addTask: (columnId: string, title: string) => {
    set((state) => {
      const inColumn = state.tasksSlice.tasks.filter(
        (task) => task.columnId === columnId,
      );
      state.tasksSlice.tasks.push({
        id: crypto.randomUUID(),
        columnId,
        title,
        completed: false,
        order: getNextOrderValue(inColumn),
      });
    });
  },

  removeTask: (taskId: string) => {
    set((state) => {
      state.tasksSlice.tasks = removeItemById(
        state.tasksSlice.tasks,
        taskId,
        'id',
      );
      state.selectionSlice.selectedTaskIds = removePrimitiveItem(
        state.selectionSlice.selectedTaskIds,
        taskId,
      );
    });
  },

  updateTask: (
    taskId: string,
    payload: Partial<Pick<IBoardTask, 'title'>>,
  ) => {
    set((state) => {
      const task = getItemById(state.tasksSlice.tasks, taskId, 'id');
      if (task && payload.title !== undefined) task.title = payload.title;
    });
  },

  setTaskCompleted: (taskId: string, completed: boolean) => {
    set((state) => {
      const task = getItemById(state.tasksSlice.tasks, taskId, 'id');
      if (task) task.completed = completed;
    });
  },

  reorderTasksInColumn: (columnId: string, taskIds: string[]) => {
    set((state) => {
      const tasksById = new Map(
        state.tasksSlice.tasks.map((task) => [task.id, task]),
      );
      taskIds.forEach((taskId, index) => {
        const task = tasksById.get(taskId);
        if (task?.columnId === columnId) task.order = index;
      });
    });
  },

  moveTaskToColumn: (taskId: string, targetColumnId: string) => {
    set((state) => {
      const task = getItemById(state.tasksSlice.tasks, taskId, 'id');
      if (!task) return;
      const inTargetColumn = state.tasksSlice.tasks.filter(
        (task) => task.columnId === targetColumnId,
      );
      task.columnId = targetColumnId;
      task.order = getNextOrderValue(inTargetColumn);
    });
  },
});
