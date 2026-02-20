import { FC, ReactElement, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import useBoardStoreProvider from '@providers/boardStoreProvider/useBoardStoreProvider';

import AddColumnVM from '../AddColumnVM/AddColumnVM';
import BoardColumnVM from '../BoardColumnVM/BoardColumnVM';

import { getSortedColumnsAndIds } from '@pages/boardModule/helpers/boardColumns.helper';
import {
  addColumnWrapperStyle,
  emptyMessageStyle,
  rootStyle,
} from './boardVM.styles';

const BoardVM: FC = (): ReactElement => {
  const { boardStore } = useBoardStoreProvider();
  const { t } = useTranslation();

  const columnsFromStore = boardStore((state) => state.columnsSlice.columns);

  const { columns, columnIds } = useMemo(
    () => getSortedColumnsAndIds(columnsFromStore),
    [columnsFromStore],
  );

  return (
    <div style={rootStyle}>
      {columns.map((column) => (
        <BoardColumnVM
          key={column.id}
          column={column}
          columnIds={columnIds}
        />
      ))}

      <div style={addColumnWrapperStyle}>
        <AddColumnVM />
      </div>

      {columns.length === 0 && (
        <p style={emptyMessageStyle}>
          {t('common:board_empty')}
        </p>
      )}
    </div>
  );
};

export default BoardVM;
