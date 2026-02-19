import { FC, useCallback, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useBoardActions } from '@providers/boardStoreProvider/hooks/useBoardActions';
import useBoardStoreProvider from '@providers/boardStoreProvider/useBoardStoreProvider';
import { useColumnDragAndDrop } from '@pages/boardModule/hooks/useColumnDragAndDrop';
import Button from '@shared/UIkit/Button/Button';
import Card from '@shared/UIkit/Card/Card';

import { getTasksByColumnId } from '@pages/boardModule/hooks/tasksByColumnId.helper';

import AddTaskVM from '../AddTaskVM/AddTaskVM';
import TaskCardVM from '../TaskCardVM/TaskCardVM';

import { IBoardColumnVMProps } from './boardColumnVM.interface';
import {
  deleteButtonStyle,
  getCardStyle,
  headerStyle,
  taskListStyle,
  titleStyle,
} from './boardColumnVM.styles';

const BoardColumnVM: FC<IBoardColumnVMProps> = (props) => {
  const { column, columnIds } = props;
  const { t } = useTranslation();
  const { boardStore } = useBoardStoreProvider();
  const actions = useBoardActions();
  const columnRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const tasksFromStore = boardStore((state) => state.tasksSlice.tasks);

  const tasks = useMemo(
    () => (getTasksByColumnId(tasksFromStore)[column.id] ?? []),
    [tasksFromStore, column.id],
  );

  const taskIdsInColumn = useMemo(
    () => tasks.map((task) => task.id),
    [tasks],
  );

  const handleReorderTasks = useCallback(
    (taskIds: string[]) => {
      actions.reorderTasksInColumn(column.id, taskIds);
    },
    [column.id, actions],
  );

  useColumnDragAndDrop({
    elementRef: columnRef,
    columnId: column.id,
    columnIds,
    onReorder: actions.reorderColumns,
    setIsDragging,
  });

  const cardStyle = useMemo(
    () => getCardStyle(isDragging),
    [isDragging],
  );

  const handleDeleteColumn = (): void => {
    actions.removeColumn(column.id);
  };

  return (
    <div
      ref={columnRef}
      data-column-id={column.id}
    >
      <Card style={cardStyle}>
        <div style={headerStyle}>
          <span style={titleStyle}>
            {column.title}
          </span>

          <Button
            onClick={handleDeleteColumn}
            variant="secondary"
            style={deleteButtonStyle}
          >
            {t('common:delete')}
          </Button>
        </div>

        <div style={taskListStyle}>
          {tasks.map((task) => (
            <TaskCardVM
              key={task.id}
              task={task}
              taskIdsInColumn={taskIdsInColumn}
              onReorder={handleReorderTasks}
            />
          ))}
        </div>

        <AddTaskVM columnId={column.id} />
      </Card>
    </div>
  );
};

export default BoardColumnVM;
