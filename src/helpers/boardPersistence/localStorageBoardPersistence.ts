import { getStorageItem, setStorageItem } from '@helpers/localStorageConnector/localStorage';
import { LSKeys } from '@helpers/localStorageConnector/localStorageKeys.enum';

import { IBoardPersistence } from './boardPersistence.interface';
import { ISerializedBoardState } from './serializedBoardState.interface';

const isSerializedBoardState = (value: unknown): value is ISerializedBoardState => (
  typeof value === 'object' &&
  value !== null &&
  Array.isArray((value as ISerializedBoardState).columns) &&
  Array.isArray((value as ISerializedBoardState).tasks)
);

export const localStorageBoardPersistence: IBoardPersistence = {
  load(): Promise<ISerializedBoardState | null> {
    const raw = getStorageItem<unknown>(LSKeys.BOARD_STATE);
    if (raw === undefined || !isSerializedBoardState(raw)) {
      return Promise.resolve(null);
    }

    return Promise.resolve(raw);
  },

  save(data: ISerializedBoardState): Promise<void> {
    setStorageItem(LSKeys.BOARD_STATE, data);

    return Promise.resolve();
  },
};
