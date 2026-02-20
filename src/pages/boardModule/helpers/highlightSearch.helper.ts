export interface IHighlightSegment {
  text: string;
  match: boolean;
}

export const getHighlightedTitleSegments = (
  title: string,
  query: string,
): IHighlightSegment[] => {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return [{ text: title, match: false }];

  const lowerTitle = title.toLowerCase();
  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
  const ranges: [number, number][] = [];

  for (const token of tokens) {
    let start = 0;
    while (start < lowerTitle.length) {
      const index = lowerTitle.indexOf(token, start);
      if (index === -1) break;
      ranges.push([index, index + token.length]);
      start = index + 1;
    }
  }

  ranges.sort((rangeA, rangeB) => rangeA[0] - rangeB[0]);

  const merged: [number, number][] = [];
  for (const [start, end] of ranges) {
    const last = merged[merged.length - 1];
    if (last != null && start <= last[1]) {
      last[1] = Math.max(last[1], end);
    } else {
      merged.push([start, end]);
    }
  }

  const segments: IHighlightSegment[] = [];
  let pos = 0;

  for (const [start, end] of merged) {
    if (pos < start) {
      segments.push({ text: title.slice(pos, start), match: false });
    }
    segments.push({ text: title.slice(start, end), match: true });
    pos = end;
  }

  if (pos < title.length) {
    segments.push({ text: title.slice(pos), match: false });
  }

  return segments.length > 0 ? segments : [{ text: title, match: false }];
};
