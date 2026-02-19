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
}
