export interface ISerializedBoardColumn {
  id: string;
  title: string;
  order: number;
}

export interface ISerializedBoardTask {
  id: string;
  columnId: string;
  title: string;
  completed: boolean;
  order: number;
}

export interface ISerializedBoardState {
  columns: ISerializedBoardColumn[];
  tasks: ISerializedBoardTask[];
}
