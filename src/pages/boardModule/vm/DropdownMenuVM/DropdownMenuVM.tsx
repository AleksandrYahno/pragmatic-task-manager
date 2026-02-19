import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useBoardActions } from '@providers/boardStoreProvider/hooks/useBoardActions';
import useBoardStoreProvider from '@providers/boardStoreProvider/useBoardStoreProvider';
import Button from '@shared/UIkit/Button/Button';
import DropdownMenu from '@shared/UIkit/DropdownMenu/DropdownMenu';

import { IDropdownMenuVMProps } from './dropdownMenuVM.interface';
import { defaultTriggerButtonStyle } from './dropdownMenuVM.styles';

const DropdownMenuVM: FC<IDropdownMenuVMProps> = (props) => {
  const { taskId } = props;
  const { t } = useTranslation();
  const { boardStore } = useBoardStoreProvider();
  const actions = useBoardActions();

  const completed = boardStore((state) => {
    const found = state.tasksSlice.tasks.find((task) => task.id === taskId);

    return found?.completed ?? false;
  });

  const handleEdit = useCallback((): void => {
    actions.setEditingTaskId(taskId);
  }, [taskId, actions]);

  const handleToggleComplete = useCallback((): void => {
    actions.setTaskCompleted(taskId, !completed);
  }, [taskId, completed, actions]);

  const handleDelete = useCallback((): void => {
    actions.removeTask(taskId);
  }, [taskId, actions]);

  const menuItems = useMemo(
    () => [
      {
        id: 'edit',
        label: t('common:edit'),
        onClick: handleEdit,
      },
      {
        id: 'toggle-complete',
        label: completed
          ? t('common:board_mark_incomplete')
          : t('common:board_mark_complete'),
        onClick: handleToggleComplete,
      },
      {
        id: 'delete',
        label: t('common:delete'),
        onClick: handleDelete,
      },
    ],
    [t, completed, handleEdit, handleToggleComplete, handleDelete],
  );

  const defaultTrigger = (
    <Button
      variant="secondary"
      style={defaultTriggerButtonStyle}
    >
      ⋯
    </Button>
  );

  return (
    <DropdownMenu
      trigger={defaultTrigger}
      items={menuItems}
    />
  );
};

export default DropdownMenuVM;
