import { IBoardTask } from '@providers/boardStoreProvider/boardStore/tasksSlice/tasksSlice.interface';

export interface ITaskCardVMProps {
  task: IBoardTask;
  taskIdsInColumn: string[];
  onReorder: (taskIds: string[]) => void;
}
