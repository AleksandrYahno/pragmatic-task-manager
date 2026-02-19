import { reorder } from '@atlaskit/pragmatic-drag-and-drop/reorder';

export const getReorderedColumnIds = (
  sourceId: string,
  targetId: string,
  columnIds: string[],
): string[] | null => {
  if (sourceId === targetId) return null;

  const startIndex = columnIds.indexOf(sourceId);
  const finishIndex = columnIds.indexOf(targetId);

  if (startIndex === -1 || finishIndex === -1) return null;

  return reorder({
    list: columnIds,
    startIndex,
    finishIndex,
  });
};
