import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useBoardActions } from '@providers/boardStoreProvider/hooks/useBoardActions';
import useBoardStoreProvider from '@providers/boardStoreProvider/useBoardStoreProvider';
import Button from '@shared/UIkit/Button/Button';
import Select from '@shared/UIkit/Select/Select';

import { getSortedColumnsAndIds } from '@pages/boardModule/helpers/boardColumns.helper';

import {
  selectionBarCountStyle,
  selectionBarRootStyle,
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

  const columnOptions = useMemo(
    () => columns.map((column) => ({ value: column.id, label: column.title })),
    [columns],
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
    (targetColumnId: string): void => {
      if (!targetColumnId) return;
      selectedTaskIds.forEach((taskId) =>
        actions.moveTaskToColumn(taskId, targetColumnId),
      );
      actions.clearSelection();
    },
    [selectedTaskIds, actions],
  );

  const handleClearSelection = useCallback((): void => {
    actions.clearSelection();
  }, [actions]);

  const handleSelectAllInColumn = useCallback(
    (columnId: string): void => {
      if (!columnId) return;
      actions.selectAllInColumn(columnId);
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

      <Select
        options={columnOptions}
        value=""
        onChange={handleSelectAllInColumn}
        placeholderLabel={t('common:board_select_all_in_column')}
        ariaLabel={t('common:board_select_all_in_column')}
      />

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

      <Select
        options={columnOptions}
        value=""
        onChange={handleMoveToColumn}
        placeholderLabel={t('common:board_move_to_column')}
        ariaLabel={t('common:board_move_to_column')}
        disabled={!hasSelection}
      />

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
