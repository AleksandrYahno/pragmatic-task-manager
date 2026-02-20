import { KeyboardEvent } from 'react';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useBoardActions } from '@providers/boardStoreProvider/hooks/useBoardActions';
import Button from '@shared/UIkit/Button/Button';
import Card from '@shared/UIkit/Card/Card';
import Input from '@shared/UIkit/Input/Input';

import { IAddColumnVMProps } from './addColumnVM.interface';

const AddColumnVM: FC<IAddColumnVMProps> = () => {
  const { t } = useTranslation();
  const actions = useBoardActions();
  const [title, setTitle] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (): void => {
    const trimmed = title.trim();
    if (!trimmed) return;
    actions.addColumn(trimmed);
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
    <Card
      variant="dashed"
      isFocused={isFocused}
    >
      <Input
        value={title}
        onChange={setTitle}
        placeholder={t('common:board_column_title_placeholder')}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ariaLabel={t('common:board_add_column_input_aria')}
        maxLength={500}
      />

      <Button
        onClick={handleSubmit}
        disabled={!title.trim()}
      >
        {t('common:board_add_column')}
      </Button>
    </Card>
  );
};

export default AddColumnVM;
