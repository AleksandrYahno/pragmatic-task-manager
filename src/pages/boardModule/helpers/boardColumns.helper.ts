import { getArrayOfFieldsFromList } from '@helpers/array.helper';
import { IBoardColumn } from '@providers/boardStoreProvider/boardStore/columnsSlice/columnsSlice.interface';

export interface ISortedColumnsResult {
  columns: IBoardColumn[];
  columnIds: string[];
}

export const getSortedColumnsAndIds = (
  columns: IBoardColumn[],
): ISortedColumnsResult => {
  const sortedColumns = [...columns].sort(
    (columnA, columnB) => columnA.order - columnB.order,
  );
  const columnIds = getArrayOfFieldsFromList(sortedColumns, 'id');

  return {
    columns: sortedColumns,
    columnIds,
  };
};
