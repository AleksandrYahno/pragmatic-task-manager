import { describe, expect, it } from 'vitest';

import type { IBoardTask } from '@providers/boardStoreProvider/boardStore/tasksSlice/tasksSlice.interface';

import { filterTasksBySearchAndCompletion } from './filterTasks.helper';

const task = (
  id: string,
  title: string,
  completed: boolean,
  columnId = 'col1',
  order = 0,
): IBoardTask => ({
  id,
  columnId,
  title,
  completed,
  order,
});

describe('filterTasksBySearchAndCompletion', () => {
  const tasks: IBoardTask[] = [
    task('1', 'Alpha beta', false),
    task('2', 'Beta gamma', true),
    task('3', 'Gamma delta', false),
    task('4', 'Alpha gamma', true),
  ];

  it('returns all tasks when query is empty and filter is all', () => {
    const result = filterTasksBySearchAndCompletion(tasks, '', 'all');
    expect(result).toHaveLength(4);
  });

  it('returns only completed tasks when completionFilter is completed', () => {
    const result = filterTasksBySearchAndCompletion(tasks, '', 'completed');
    expect(result).toHaveLength(2);
    expect(result.every((t) => t.completed)).toBe(true);
    expect(result.map((t) => t.id)).toContain('2');
    expect(result.map((t) => t.id)).toContain('4');
  });

  it('returns only incomplete tasks when completionFilter is incomplete', () => {
    const result = filterTasksBySearchAndCompletion(tasks, '', 'incomplete');
    expect(result).toHaveLength(2);
    expect(result.every((t) => !t.completed)).toBe(true);
    expect(result.map((t) => t.id)).toContain('1');
    expect(result.map((t) => t.id)).toContain('3');
  });

  it('filters by single token (case-insensitive)', () => {
    const result = filterTasksBySearchAndCompletion(tasks, 'alpha', 'all');
    expect(result).toHaveLength(2);
    expect(result.map((t) => t.title)).toEqual(['Alpha beta', 'Alpha gamma']);
  });

  it('filters by multiple tokens (all must match)', () => {
    const result = filterTasksBySearchAndCompletion(tasks, 'alpha gamma', 'all');
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('Alpha gamma');
  });

  it('returns empty when token does not match any title', () => {
    const result = filterTasksBySearchAndCompletion(tasks, 'zeta', 'all');
    expect(result).toHaveLength(0);
  });

  it('combines search and completion filter', () => {
    const result = filterTasksBySearchAndCompletion(tasks, 'gamma', 'completed');
    expect(result).toHaveLength(2);
    expect(result.every((t) => t.completed && t.title.toLowerCase().includes('gamma'))).toBe(true);
    expect(result.map((t) => t.id).sort()).toEqual(['2', '4']);
  });

  it('trims query and ignores extra spaces', () => {
    const result = filterTasksBySearchAndCompletion(tasks, '  alpha   beta  ', 'all');
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('Alpha beta');
  });
});
