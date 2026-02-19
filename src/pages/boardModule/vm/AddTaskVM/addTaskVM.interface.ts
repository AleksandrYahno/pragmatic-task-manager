export interface IAddTaskVMProps {
  columnId: string;
  onAddTask: (columnId: string, title: string) => void;
}
