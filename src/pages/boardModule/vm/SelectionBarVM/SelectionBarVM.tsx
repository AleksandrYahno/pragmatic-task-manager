import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useBoardActions } from '@providers/boardStoreProvider/hooks/useBoardActions';
import useBoardStoreProvider from '@providers/boardStoreProvider/useBoardStoreProvider';
import Button from '@shared/UIkit/Button/Button';

import { getSortedColumnsAndIds } from '@pages/boardModule/helpers/boardColumns.helper';

import {
  selectionBarCountStyle,
  selectionBarRootStyle,
  selectionBarSelectStyle,
} from './selectionBarVM.styles';

const SelectionBarVM: FC = () => {
  const { t } = useTranslation();
  const { boardStore } = useBoardStoreProvider();
  const actions = useBoardActions();

  const selectedTaskIds = boardStore(
    (state) => state.selectionSlice.selectedTaskIds,
  );
  const columnsFromStore = boardStore(
    (state) => state.columnsSlice.columns,
  );

  const { columns } = useMemo(
    () => getSortedColumnsAndIds(columnsFromStore),
    [columnsFromStore],
  );

  const handleDelete = useCallback((): void => {
    selectedTaskIds.forEach((taskId) => actions.removeTask(taskId));
    actions.clearSelection();
  }, [selectedTaskIds, actions]);

  const handleMarkComplete = useCallback((): void => {
    selectedTaskIds.forEach((taskId) =>
      actions.setTaskCompleted(taskId, true),
    );
    actions.clearSelection();
  }, [selectedTaskIds, actions]);

  const handleMarkIncomplete = useCallback((): void => {
    selectedTaskIds.forEach((taskId) =>
      actions.setTaskCompleted(taskId, false),
    );
    actions.clearSelection();
  }, [selectedTaskIds, actions]);

  const handleMoveToColumn = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>): void => {
      const targetColumnId = event.target.value;
      if (!targetColumnId) return;
      selectedTaskIds.forEach((taskId) =>
        actions.moveTaskToColumn(taskId, targetColumnId),
      );
      actions.clearSelection();
      event.target.value = '';
    },
    [selectedTaskIds, actions],
  );

  const handleClearSelection = useCallback((): void => {
    actions.clearSelection();
  }, [actions]);

  const handleSelectAllInColumn = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>): void => {
      const columnId = event.target.value;
      if (!columnId) return;
      actions.selectAllInColumn(columnId);
      event.target.value = '';
    },
    [actions],
  );

  const hasSelection = selectedTaskIds.length > 0;

  return (
    <div style={selectionBarRootStyle}>
      <span style={selectionBarCountStyle}>
        {t('common:board_selection_count', {
          count: selectedTaskIds.length,
        })}
      </span>

      <select
        style={selectionBarSelectStyle}
        defaultValue=""
        onChange={handleSelectAllInColumn}
        aria-label={t('common:board_select_all_in_column')}
      >
        <option
          value=""
          disabled
        >
          {t('common:board_select_all_in_column')}
        </option>
        {columns.map((column) => (
          <option
            key={column.id}
            value={column.id}
          >
            {column.title}
          </option>
        ))}
      </select>

      <Button
        variant="secondary"
        onClick={handleDelete}
        disabled={!hasSelection}
      >
        {t('common:delete')}
      </Button>

      <Button
        variant="secondary"
        onClick={handleMarkComplete}
        disabled={!hasSelection}
      >
        {t('common:board_mark_complete')}
      </Button>

      <Button
        variant="secondary"
        onClick={handleMarkIncomplete}
        disabled={!hasSelection}
      >
        {t('common:board_mark_incomplete')}
      </Button>

      <select
        style={selectionBarSelectStyle}
        defaultValue=""
        onChange={handleMoveToColumn}
        aria-label={t('common:board_move_to_column')}
        disabled={!hasSelection}
      >
        <option
          value=""
          disabled
        >
          {t('common:board_move_to_column')}
        </option>
        {columns.map((column) => (
          <option
            key={column.id}
            value={column.id}
          >
            {column.title}
          </option>
        ))}
      </select>

      <Button
        variant="secondary"
        onClick={handleClearSelection}
        disabled={!hasSelection}
      >
        {t('common:board_clear_selection')}
      </Button>
    </div>
  );
};

export default SelectionBarVM;
