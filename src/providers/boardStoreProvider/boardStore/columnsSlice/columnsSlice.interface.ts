export interface IBoardColumn {
  id: string;
  title: string;
  order: number;
}

export interface IColumnsSlice {
  columns: IBoardColumn[];
  setColumns: (columns: IBoardColumn[]) => void;
}
