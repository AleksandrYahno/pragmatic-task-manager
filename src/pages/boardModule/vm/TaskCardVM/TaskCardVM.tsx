import { FC, useMemo, useRef, useState } from 'react';

import useBoardStoreProvider from '@providers/boardStoreProvider/useBoardStoreProvider';
import { getHighlightedTitleSegments } from '@pages/boardModule/helpers/highlightSearch.helper';
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
  taskTitleHighlightStyle,
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
  const searchQuery = boardStore(
    (state) => state.searchFilterSlice.searchQuery,
  );
  const isEditing = editingTaskId === task.id;

  const titleSegments = useMemo(
    () => getHighlightedTitleSegments(task.title, searchQuery),
    [task.title, searchQuery],
  );

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
              {titleSegments.map((segment, index) =>
                segment.match ? (
                  <span
                    key={index}
                    style={taskTitleHighlightStyle}
                  >
                    {segment.text}
                  </span>
                ) : (
                  segment.text
                ),
              )}
            </span>
          )}

          <DropdownMenuVM taskId={task.id} />
        </div>
      </Card>
    </div>
  );
};

export default TaskCardVM;
