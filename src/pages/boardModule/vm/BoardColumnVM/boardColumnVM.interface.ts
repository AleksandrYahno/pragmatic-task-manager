import { IBoardColumn } from '@providers/boardStoreProvider/boardStore/columnsSlice/columnsSlice.interface';

export interface IBoardColumnVMProps {
  column: IBoardColumn;
  columnIds: string[];
}
