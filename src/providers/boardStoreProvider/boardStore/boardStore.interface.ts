import { ISerializedBoardState } from '@helpers/boardPersistence/serializedBoardState.interface';

import { IColumnsSlice } from './columnsSlice/columnsSlice.interface';
import { ITasksSlice } from './tasksSlice/tasksSlice.interface';
import { ISelectionSlice } from './selectionSlice/selectionSlice.interface';
import { ISearchFilterSlice } from './searchFilterSlice/searchFilterSlice.interface';

export interface IBoardStore {
  columnsSlice: IColumnsSlice;
  tasksSlice: ITasksSlice;
  selectionSlice: ISelectionSlice;
  searchFilterSlice: ISearchFilterSlice;
  hydrateBoard: (payload: ISerializedBoardState | null) => void;
}

export type ImmerBoardStoreSetter = (fn: (store: IBoardStore) => void) => void;
