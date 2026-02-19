import { ImmerBoardStoreSetter } from '../boardStore.interface';
import { CompletionFilter, ISearchFilterSlice } from './searchFilterSlice.interface';

export const searchFilterSlice = (set: ImmerBoardStoreSetter): ISearchFilterSlice => ({
  searchQuery: '',
  completionFilter: 'all',

  setSearchQuery: (query: string) => {
    set((state) => {
      state.searchFilterSlice.searchQuery = query;
    });
  },

  setCompletionFilter: (filter: CompletionFilter) => {
    set((state) => {
      state.searchFilterSlice.completionFilter = filter;
    });
  },
});
