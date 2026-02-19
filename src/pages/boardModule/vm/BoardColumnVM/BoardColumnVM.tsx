import { memo, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useColumnDragAndDrop } from '@pages/boardModule/hooks/useColumnDragAndDrop';
import Button from '@shared/UIkit/Button/Button';
import Card from '@shared/UIkit/Card/Card';

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

const BoardColumnVM = memo<IBoardColumnVMProps>((props) => {
  const {
    column,
    columnIds,
    tasks,
    onAddTask,
    onDeleteColumn,
    onDeleteTask,
    onReorder,
  } = props;
  const { t } = useTranslation();
  const columnRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  useColumnDragAndDrop({
    elementRef: columnRef,
    columnId: column.id,
    columnIds,
    onReorder,
    setIsDragging,
  });

  const cardStyle = useMemo(
    () => getCardStyle(isDragging),
    [isDragging],
  );

  const handleDeleteColumn = (): void => {
    onDeleteColumn(column.id);
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
              onDelete={onDeleteTask}
            />
          ))}
        </div>

        <AddTaskVM
          columnId={column.id}
          onAddTask={onAddTask}
        />
      </Card>
    </div>
  );
});

BoardColumnVM.displayName = 'BoardColumnVM';

export default BoardColumnVM;
