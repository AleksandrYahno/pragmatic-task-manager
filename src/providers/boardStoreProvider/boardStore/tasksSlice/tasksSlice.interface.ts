export interface IBoardTask {
  id: string;
  columnId: string;
  title: string;
  completed: boolean;
  order: number;
}

export interface ITasksSlice {
  tasks: IBoardTask[];
  setTasks: (tasks: IBoardTask[]) => void;
  addTask: (columnId: string, title: string) => void;
  removeTask: (taskId: string) => void;
  updateTask: (
    taskId: string,
    payload: Partial<Pick<IBoardTask, 'title'>>,
  ) => void;
  setTaskCompleted: (taskId: string, completed: boolean) => void;
  reorderTasksInColumn: (columnId: string, taskIds: string[]) => void;
  moveTaskToColumn: (taskId: string, targetColumnId: string) => void;
}
