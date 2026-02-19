import { IBoardColumn } from '@providers/boardStoreProvider/boardStore/columnsSlice/columnsSlice.interface';

export interface IBoardColumnVMProps {
  column: IBoardColumn;
  columnIds: string[];
  onDelete: (columnId: string) => void;
  onReorder: (columnIds: string[]) => void;
}
