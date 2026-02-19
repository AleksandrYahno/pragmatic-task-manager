import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useBoardActions } from '@providers/boardStoreProvider/hooks/useBoardActions';
import useBoardStoreProvider from '@providers/boardStoreProvider/useBoardStoreProvider';
import type { CompletionFilter } from '@providers/boardStoreProvider/boardStore/searchFilterSlice/searchFilterSlice.interface';

import {
  filterBarButtonStyle,
  filterBarLabelStyle,
  filterBarRootStyle,
} from './filterBarVM.styles';

const FILTER_OPTIONS: CompletionFilter[] = [
  'all',
  'completed',
  'incomplete',
];

const FilterBarVM: FC = () => {
  const { t } = useTranslation();
  const { boardStore } = useBoardStoreProvider();
  const actions = useBoardActions();

  const completionFilter = boardStore(
    (state) => state.searchFilterSlice.completionFilter,
  );

  const filterLabels: Record<CompletionFilter, string> = {
    all: t('common:board_filter_all'),
    completed: t('common:board_filter_completed'),
    incomplete: t('common:board_filter_incomplete'),
  };

  const handleFilter = useCallback(
    (filter: CompletionFilter) => {
      actions.setCompletionFilter(filter);
    },
    [actions],
  );

  return (
    <div style={filterBarRootStyle}>
      <span style={filterBarLabelStyle}>
        {t('common:board_filter_label')}
      </span>
      {FILTER_OPTIONS.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => handleFilter(filter)}
          style={filterBarButtonStyle(completionFilter === filter)}
        >
          {filterLabels[filter]}
        </button>
      ))}
    </div>
  );
};

export default FilterBarVM;
