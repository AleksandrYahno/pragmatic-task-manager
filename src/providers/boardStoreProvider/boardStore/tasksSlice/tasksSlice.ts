import { ImmerBoardStoreSetter } from '../boardStore.interface';
import { IBoardTask, ITasksSlice } from './tasksSlice.interface';

export const tasksSlice = (set: ImmerBoardStoreSetter): ITasksSlice => ({
  tasks: [],

  setTasks: (tasks: IBoardTask[]) => {
    set((state) => {
      state.tasksSlice.tasks = tasks;
    });
  },
});
