import { KeyboardEvent } from 'react';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@shared/UIkit/Button/Button';
import Card from '@shared/UIkit/Card/Card';
import Input from '@shared/UIkit/Input/Input';

import { IAddTaskVMProps } from './addTaskVM.interface';
import { addTaskWrapperStyle } from './addTaskVM.styles';

const AddTaskVM: FC<IAddTaskVMProps> = (props) => {
  const { columnId, onAddTask } = props;
  const { t } = useTranslation();
  const [title, setTitle] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (): void => {
    const trimmed = title.trim();
    if (!trimmed) return;
    onAddTask(columnId, trimmed);
    setTitle('');
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit();
    }
  };

  const handleFocus = (): void => {
    setIsFocused(true);
  };

  const handleBlur = (): void => {
    setIsFocused(false);
  };

  return (
    <div style={addTaskWrapperStyle}>
      <Card
        variant="dashed"
        isFocused={isFocused}
      >
        <Input
          value={title}
          onChange={setTitle}
          placeholder={t('common:board_task_title_placeholder')}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <Button
          onClick={handleSubmit}
          disabled={!title.trim()}
        >
          {t('common:board_add_task')}
        </Button>
      </Card>
    </div>
  );
};

export default AddTaskVM;
