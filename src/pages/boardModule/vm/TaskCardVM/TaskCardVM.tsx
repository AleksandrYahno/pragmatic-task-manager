import { FC, useMemo, useRef, useState } from 'react';

import useBoardStoreProvider from '@providers/boardStoreProvider/useBoardStoreProvider';
import { useTaskDragAndDrop } from '@pages/boardModule/hooks/useTaskDragAndDrop';
import Card from '@shared/UIkit/Card/Card';

import DropdownMenuVM from '../DropdownMenuVM/DropdownMenuVM';
import TaskCardEditInputVM from '../TaskCardEditInputVM/TaskCardEditInputVM';
import TaskCheckboxVM from '../TaskCheckboxVM/TaskCheckboxVM';

import { ITaskCardVMProps } from './taskCardVM.interface';
import {
  getTaskCardDragWrapperStyle,
  getTaskTitleStyle,
  taskCardRowStyle,
  taskCardWrapperStyle,
} from './taskCardVM.styles';

const TaskCardVM: FC<ITaskCardVMProps> = (props) => {
  const { task, taskIdsInColumn, onReorder } = props;
  const { boardStore } = useBoardStoreProvider();
  const taskCardRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  useTaskDragAndDrop({
    elementRef: taskCardRef,
    taskId: task.id,
    columnId: task.columnId,
    taskIds: taskIdsInColumn,
    onReorder,
    setIsDragging,
  });

  const editingTaskId = boardStore((state) => state.boardUISlice.editingTaskId);
  const isEditing = editingTaskId === task.id;

  const titleStyle = useMemo(
    () => getTaskTitleStyle(task.completed),
    [task.completed],
  );

  const wrapperStyle = useMemo(
    () => getTaskCardDragWrapperStyle(isDragging),
    [isDragging],
  );

  return (
    <div
      ref={taskCardRef}
      style={wrapperStyle}
    >
      <Card style={taskCardWrapperStyle}>
        <div style={taskCardRowStyle}>
          <TaskCheckboxVM taskId={task.id} />

          {isEditing ? (
            <TaskCardEditInputVM
              initialTitle={task.title}
              taskId={task.id}
            />
          ) : (
            <span style={titleStyle}>
              {task.title}
            </span>
          )}

          <DropdownMenuVM taskId={task.id} />
        </div>
      </Card>
    </div>
  );
};

export default TaskCardVM;
