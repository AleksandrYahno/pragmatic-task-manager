export interface IBoardColumn {
  id: string;
  title: string;
  order: number;
}

export interface IColumnsSlice {
  columns: IBoardColumn[];
  setColumns: (columns: IBoardColumn[]) => void;
  addColumn: (title: string) => void;
  removeColumn: (columnId: string) => void;
  reorderColumns: (columnIds: string[]) => void;
}
