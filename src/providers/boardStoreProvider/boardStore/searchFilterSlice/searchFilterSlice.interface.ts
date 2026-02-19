export type CompletionFilter = 'all' | 'completed' | 'incomplete';

export interface ISearchFilterSlice {
  searchQuery: string;
  completionFilter: CompletionFilter;
  setSearchQuery: (query: string) => void;
  setCompletionFilter: (filter: CompletionFilter) => void;
}
