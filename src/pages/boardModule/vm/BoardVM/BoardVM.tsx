import { FC, ReactElement, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useBoardActions } from '@providers/boardStoreProvider/hooks/useBoardActions';
import useBoardStoreProvider from '@providers/boardStoreProvider/useBoardStoreProvider';

import AddColumnVM from '../AddColumnVM/AddColumnVM';
import BoardColumnVM from '../BoardColumnVM/BoardColumnVM';

import { getSortedColumnsAndIds, getTasksByColumnId } from './boardVM.helpers';
import { emptyMessageStyle, rootStyle } from './boardVM.styles';

const BoardVM: FC = (): ReactElement => {
  const { boardStore } = useBoardStoreProvider();
  const actions = useBoardActions();
  const { t } = useTranslation();

  const columnsFromStore = boardStore((state) => state.columnsSlice.columns);
  const tasksFromStore = boardStore((state) => state.tasksSlice.tasks);

  const { columns, columnIds } = useMemo(
    () => getSortedColumnsAndIds(columnsFromStore),
    [columnsFromStore],
  );

  const tasksByColumnId = useMemo(
    () => getTasksByColumnId(tasksFromStore),
    [tasksFromStore],
  );

  return (
    <div style={rootStyle}>
      {columns.map((column) => (
        <BoardColumnVM
          key={column.id}
          column={column}
          columnIds={columnIds}
          tasks={tasksByColumnId[column.id] ?? []}
          onAddTask={actions.addTask}
          onDeleteColumn={actions.removeColumn}
          onDeleteTask={actions.removeTask}
          onReorder={actions.reorderColumns}
        />
      ))}

      <AddColumnVM onAdd={actions.addColumn} />

      {columns.length === 0 && (
        <p style={emptyMessageStyle}>
          {t('common:board_empty')}
        </p>
      )}
    </div>
  );
};

export default BoardVM;
