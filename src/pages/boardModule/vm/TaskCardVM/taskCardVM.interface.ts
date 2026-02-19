import { IBoardTask } from '@providers/boardStoreProvider/boardStore/tasksSlice/tasksSlice.interface';

export interface ITaskCardVMProps {
  task: IBoardTask;
  onDelete: (taskId: string) => void;
}
