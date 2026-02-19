export interface IBoardUISlice {
  editingTaskId: string | null;
  setEditingTaskId: (taskId: string | null) => void;
}
