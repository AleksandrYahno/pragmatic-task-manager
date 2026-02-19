import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { RefObject, useEffect } from 'react';

const TASK_DRAG_TYPE = 'task';

export interface IUseTaskDropTargetForColumnArgs {
  elementRef: RefObject<HTMLDivElement | null>;
  columnId: string;
  onTaskDrop: (taskId: string) => void;
}

export const useTaskDropTargetForColumn = (
  args: IUseTaskDropTargetForColumnArgs,
): void => {
  const { elementRef, columnId, onTaskDrop } = args;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    return dropTargetForElements({
      element,
      getData: () => ({ type: 'task-column-drop', columnId }),
      canDrop: ({ source }) => source.data.type === TASK_DRAG_TYPE,
      onDrop: ({ source }) => {
        const taskId = source.data.taskId as string | undefined;
        const sourceColumnId = source.data.columnId as string | undefined;

        if (!taskId || !sourceColumnId) return;
        if (sourceColumnId === columnId) return;

        onTaskDrop(taskId);
      },
    });
  }, [columnId, onTaskDrop]);
};
