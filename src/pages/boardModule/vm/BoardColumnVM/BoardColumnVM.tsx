import { memo, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useColumnDragAndDrop } from '@pages/boardModule/hooks/useColumnDragAndDrop';
import Button from '@shared/UIkit/Button/Button';
import Card from '@shared/UIkit/Card/Card';

import { IBoardColumnVMProps } from './boardColumnVM.interface';
import {
  deleteButtonStyle,
  getCardStyle,
  headerStyle,
  titleStyle,
} from './boardColumnVM.styles';

const BoardColumnVM = memo<IBoardColumnVMProps>((props) => {
  const {
    column,
    columnIds,
    onDelete,
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

  const handleDelete = (): void => {
    onDelete(column.id);
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
            onClick={handleDelete}
            variant="secondary"
            style={deleteButtonStyle}
          >
            {t('common:delete')}
          </Button>
        </div>
      </Card>
    </div>
  );
});

BoardColumnVM.displayName = 'BoardColumnVM';

export default BoardColumnVM;
