import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';
import {
  draggable,
  dropTargetForElements,
} from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { RefObject, useEffect } from 'react';

import { getReorderedColumnIds } from './columnReorder.helper';

const COLUMN_DRAG_TYPE = 'column';

export interface IUseColumnDragAndDropArgs {
  elementRef: RefObject<HTMLDivElement | null>;
  columnId: string;
  columnIds: string[];
  onReorder: (columnIds: string[]) => void;
  setIsDragging: (value: boolean) => void;
}

export const useColumnDragAndDrop = (args: IUseColumnDragAndDropArgs): void => {
  const {
    elementRef,
    columnId,
    columnIds,
    onReorder,
    setIsDragging,
  } = args;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    return combine(
      draggable({
        element,
        getInitialData: () => ({ type: COLUMN_DRAG_TYPE, columnId }),
        onDragStart: () => setIsDragging(true),
        onDrop: () => setIsDragging(false),
      }),
      dropTargetForElements({
        element,
        getData: () => ({ type: COLUMN_DRAG_TYPE, columnId }),
        canDrop: ({ source }) => source.data.type === COLUMN_DRAG_TYPE,
        onDrop: ({ source, location }) => {
          const sourceId = source.data.columnId as string | undefined;
          const targetRecord = location.current.dropTargets.find(
            (record) =>
              record.data?.type === COLUMN_DRAG_TYPE &&
              typeof record.data.columnId === 'string',
          );
          const targetId = targetRecord?.data?.columnId as string | undefined;

          if (!sourceId || !targetId) return;

          const newOrder = getReorderedColumnIds(sourceId, targetId, columnIds);
          if (newOrder !== null) {
            onReorder(newOrder);
          }
        },
      }),
    );
  }, [columnId, columnIds, onReorder, setIsDragging]);
};
