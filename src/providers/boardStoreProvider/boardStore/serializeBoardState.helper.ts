import { ISerializedBoardState } from '@helpers/boardPersistence/serializedBoardState.interface';

import { IBoardStore } from './boardStore.interface';

export const serializeBoardState = (state: IBoardStore): ISerializedBoardState => ({
  columns: state.columnsSlice.columns,
  tasks: state.tasksSlice.tasks,
});
