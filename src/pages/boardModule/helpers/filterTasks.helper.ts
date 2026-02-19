import type { CompletionFilter } from '@providers/boardStoreProvider/boardStore/searchFilterSlice/searchFilterSlice.interface';
import type { IBoardTask } from '@providers/boardStoreProvider/boardStore/tasksSlice/tasksSlice.interface';

export const filterTasksBySearchAndCompletion = (
  tasks: IBoardTask[],
  searchQuery: string,
  completionFilter: CompletionFilter,
): IBoardTask[] => {
  const query = searchQuery.trim().toLowerCase();

  return tasks.filter((task) => {
    const matchesSearch =
      !query || task.title.toLowerCase().includes(query);
    const matchesCompletion =
      completionFilter === 'all' ||
      (completionFilter === 'completed' && task.completed) ||
      (completionFilter === 'incomplete' && !task.completed);

    return matchesSearch && matchesCompletion;
  });
};
