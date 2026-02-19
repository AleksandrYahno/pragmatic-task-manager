import { KeyboardEvent, useCallback, useState } from 'react';
import { FC } from 'react';

import { useBoardActions } from '@providers/boardStoreProvider/hooks/useBoardActions';
import Input from '@shared/UIkit/Input/Input';

import { ITaskCardEditInputVMProps } from './taskCardEditInputVM.interface';
import { taskCardEditInputVMInputStyle } from './taskCardEditInputVM.styles';

const TaskCardEditInputVM: FC<ITaskCardEditInputVMProps> = (props) => {
  const { initialTitle, taskId } = props;
  const [value, setValue] = useState(initialTitle);
  const actions = useBoardActions();

  const handleSubmit = useCallback((): void => {
    const trimmed = value.trim();
    if (trimmed && trimmed !== initialTitle) {
      actions.updateTask(taskId, { title: trimmed });
    }
    actions.setEditingTaskId(null);
  }, [value, initialTitle, taskId, actions]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>): void => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleSubmit();
      }
    },
    [handleSubmit],
  );

  return (
    <Input
      value={value}
      onChange={setValue}
      onKeyDown={handleKeyDown}
      onBlur={handleSubmit}
      style={taskCardEditInputVMInputStyle}
    />
  );
};

export default TaskCardEditInputVM;
