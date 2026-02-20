import type { CompletionFilter } from '@providers/boardStoreProvider/boardStore/searchFilterSlice/searchFilterSlice.interface';
import type { IBoardTask } from '@providers/boardStoreProvider/boardStore/tasksSlice/tasksSlice.interface';

const titleMatchesSearchQuery = (title: string, query: string): boolean => {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return true;
  const lowerTitle = title.toLowerCase();
  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);

  return tokens.every((token) => lowerTitle.includes(token));
};

export const filterTasksBySearchAndCompletion = (
  tasks: IBoardTask[],
  searchQuery: string,
  completionFilter: CompletionFilter,
): IBoardTask[] => {
  const query = searchQuery.trim().toLowerCase();

  return tasks.filter((task) => {
    const matchesSearch = !query || titleMatchesSearchQuery(task.title, query);
    const matchesCompletion =
      completionFilter === 'all' ||
      (completionFilter === 'completed' && task.completed) ||
      (completionFilter === 'incomplete' && !task.completed);

    return matchesSearch && matchesCompletion;
  });
};
