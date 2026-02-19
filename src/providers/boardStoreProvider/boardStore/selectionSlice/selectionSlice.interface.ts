export interface ISelectionSlice {
  selectedTaskIds: string[];
  setSelectedTaskIds: (ids: string[]) => void;
  toggle: (taskId: string) => void;
  selectAllInColumn: (columnId: string) => void;
  clear: () => void;
}
