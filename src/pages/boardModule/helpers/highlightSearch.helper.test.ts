import { describe, expect, it } from 'vitest';

import {
  getHighlightedTitleSegments,
  type IHighlightSegment,
} from './highlightSearch.helper';

const segment = (text: string, match: boolean): IHighlightSegment => ({ text, match });

describe('getHighlightedTitleSegments', () => {
  it('returns single non-match segment when query is empty', () => {
    const result = getHighlightedTitleSegments('Hello World', '');
    expect(result).toEqual([segment('Hello World', false)]);
  });

  it('returns single non-match segment when query is whitespace only', () => {
    const result = getHighlightedTitleSegments('Hello World', '   ');
    expect(result).toEqual([segment('Hello World', false)]);
  });

  it('highlights single token (case-insensitive)', () => {
    const result = getHighlightedTitleSegments('Hello World', 'world');
    expect(result).toEqual([
      segment('Hello ', false),
      segment('World', true),
    ]);
  });

  it('highlights token at start', () => {
    const result = getHighlightedTitleSegments('Hello World', 'hello');
    expect(result).toEqual([
      segment('Hello', true),
      segment(' World', false),
    ]);
  });

  it('highlights multiple non-overlapping tokens', () => {
    const result = getHighlightedTitleSegments('Alpha Beta Gamma', 'alpha gamma');
    expect(result).toEqual([
      segment('Alpha', true),
      segment(' Beta ', false),
      segment('Gamma', true),
    ]);
  });

  it('merges overlapping token ranges', () => {
    const result = getHighlightedTitleSegments('aaaa', 'aa');
    expect(result).toEqual([
      segment('aaaa', true),
    ]);
  });

  it('handles repeated token', () => {
    const result = getHighlightedTitleSegments('foo bar foo', 'foo');
    expect(result).toEqual([
      segment('foo', true),
      segment(' bar ', false),
      segment('foo', true),
    ]);
  });

  it('returns single non-match when query does not appear in title', () => {
    const result = getHighlightedTitleSegments('Hello World', 'xyz');
    expect(result.length).toBeGreaterThanOrEqual(1);
    expect(result.every((s) => !s.match)).toBe(true);
    expect(result.map((s) => s.text).join('')).toBe('Hello World');
  });
});
