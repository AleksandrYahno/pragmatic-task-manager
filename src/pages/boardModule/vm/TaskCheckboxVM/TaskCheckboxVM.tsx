import { FC, useCallback } from 'react';

import { useBoardActions } from '@providers/boardStoreProvider/hooks/useBoardActions';
import useBoardStoreProvider from '@providers/boardStoreProvider/useBoardStoreProvider';
import Checkbox from '@shared/UIkit/Checkbox/Checkbox';

import { ITaskCheckboxVMProps } from './taskCheckboxVM.interface';
import { taskCheckboxVMWrapperStyle } from './taskCheckboxVM.styles';

const TaskCheckboxVM: FC<ITaskCheckboxVMProps> = (props) => {
  const { taskId } = props;
  const { boardStore } = useBoardStoreProvider();
  const actions = useBoardActions();

  const checked = boardStore((state) =>
    state.selectionSlice.selectedTaskIds.includes(taskId),
  );

  const handleChange = useCallback(
    (): void => {
      actions.toggleTaskSelection(taskId);
    },
    [taskId, actions],
  );

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      style={taskCheckboxVMWrapperStyle}
    />
  );
};

export default TaskCheckboxVM;
