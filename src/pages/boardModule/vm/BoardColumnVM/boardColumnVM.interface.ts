import { IBoardColumn } from '@providers/boardStoreProvider/boardStore/columnsSlice/columnsSlice.interface';
import { IBoardTask } from '@providers/boardStoreProvider/boardStore/tasksSlice/tasksSlice.interface';

export interface IBoardColumnVMProps {
  column: IBoardColumn;
  columnIds: string[];
  tasks: IBoardTask[];
  onAddTask: (columnId: string, title: string) => void;
  onDeleteColumn: (columnId: string) => void;
  onDeleteTask: (taskId: string) => void;
  onReorder: (columnIds: string[]) => void;
}
