import { ISerializedBoardState } from './serializedBoardState.interface';

export interface IBoardPersistence {
  load(): Promise<ISerializedBoardState | null>;
  save(data: ISerializedBoardState): Promise<void>;
}
