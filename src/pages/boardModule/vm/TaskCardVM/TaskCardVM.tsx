import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@shared/UIkit/Button/Button';
import Card from '@shared/UIkit/Card/Card';

import { ITaskCardVMProps } from './taskCardVM.interface';
import {
  getTaskTitleStyle,
  taskCardDeleteButtonStyle,
  taskCardRowStyle,
  taskCardWrapperStyle,
} from './taskCardVM.styles';

const TaskCardVM: FC<ITaskCardVMProps> = (props) => {
  const { task, onDelete } = props;
  const { t } = useTranslation();

  const titleStyle = useMemo(
    () => getTaskTitleStyle(task.completed),
    [task.completed],
  );

  const handleDelete = (): void => {
    onDelete(task.id);
  };

  return (
    <Card style={taskCardWrapperStyle}>
      <div style={taskCardRowStyle}>
        <span style={titleStyle}>
          {task.title}
        </span>

        <Button
          onClick={handleDelete}
          variant="secondary"
          style={taskCardDeleteButtonStyle}
        >
          {t('common:delete')}
        </Button>
      </div>
    </Card>
  );
};

export default TaskCardVM;
