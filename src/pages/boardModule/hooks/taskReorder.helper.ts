import { reorder } from '@atlaskit/pragmatic-drag-and-drop/reorder';

export const getReorderedTaskIds = (
  sourceId: string,
  targetId: string,
  taskIds: string[],
): string[] | null => {
  if (sourceId === targetId) return null;

  const startIndex = taskIds.indexOf(sourceId);
  const finishIndex = taskIds.indexOf(targetId);

  if (startIndex === -1 || finishIndex === -1) return null;

  return reorder({
    list: taskIds,
    startIndex,
    finishIndex,
  });
};
