import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';
import {
  draggable,
  dropTargetForElements,
} from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { RefObject, useEffect } from 'react';

import { getReorderedTaskIds } from './taskReorder.helper';

const TASK_DRAG_TYPE = 'task';

export interface IUseTaskDragAndDropArgs {
  elementRef: RefObject<HTMLDivElement | null>;
  taskId: string;
  columnId: string;
  taskIds: string[];
  onReorder: (taskIds: string[]) => void;
  setIsDragging: (value: boolean) => void;
}

export const useTaskDragAndDrop = (args: IUseTaskDragAndDropArgs): void => {
  const {
    elementRef,
    taskId,
    columnId,
    taskIds,
    onReorder,
    setIsDragging,
  } = args;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    return combine(
      draggable({
        element,
        getInitialData: () => ({ type: TASK_DRAG_TYPE, taskId, columnId }),
        onDragStart: () => setIsDragging(true),
        onDrop: () => setIsDragging(false),
      }),
      dropTargetForElements({
        element,
        getData: () => ({ type: TASK_DRAG_TYPE, taskId, columnId }),
        canDrop: ({ source }) =>
          source.data.type === TASK_DRAG_TYPE &&
          source.data.columnId === columnId,
        onDrop: ({ source, location }) => {
          const sourceId = source.data.taskId as string | undefined;
          if (!sourceId) return;

          const targetRecord = location.current.dropTargets.find(
            (record) =>
              record.data?.type === TASK_DRAG_TYPE &&
              typeof record.data.taskId === 'string' &&
              record.data.taskId !== sourceId,
          );
          const targetId = targetRecord?.data?.taskId as string | undefined;

          if (!targetId) return;

          const newOrder = getReorderedTaskIds(sourceId, targetId, taskIds);
          if (newOrder !== null) {
            onReorder(newOrder);
          }
        },
      }),
    );
  }, [taskId, columnId, taskIds, onReorder, setIsDragging]);
};
