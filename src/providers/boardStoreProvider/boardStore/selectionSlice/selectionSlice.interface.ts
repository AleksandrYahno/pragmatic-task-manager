export interface ISelectionSlice {
  selectedTaskIds: string[];
  setSelectedTaskIds: (ids: string[]) => void;
}
