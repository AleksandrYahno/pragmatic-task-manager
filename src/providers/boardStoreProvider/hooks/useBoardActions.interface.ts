export interface IBoardActions {
  addColumn: (title: string) => void;
  removeColumn: (columnId: string) => void;
  reorderColumns: (columnIds: string[]) => void;
  addTask: (columnId: string, title: string) => void;
  removeTask: (taskId: string) => void;
  updateTask: (
    taskId: string,
    payload: { title?: string },
  ) => void;
  setTaskCompleted: (taskId: string, completed: boolean) => void;
  reorderTasksInColumn: (columnId: string, taskIds: string[]) => void;
  moveTaskToColumn: (taskId: string, targetColumnId: string) => void;
  toggleTaskSelection: (taskId: string) => void;
  selectAllInColumn: (columnId: string) => void;
  clearSelection: () => void;
  setEditingTaskId: (taskId: string | null) => void;
}
