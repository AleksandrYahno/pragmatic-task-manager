import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useDebounce } from '@helpers/useDebounce/useDebounce';
import { useBoardActions } from '@providers/boardStoreProvider/hooks/useBoardActions';
import Input from '@shared/UIkit/Input/Input';

import { searchBarInputWrapperStyle, searchBarRootStyle } from './searchBarVM.styles';

const SEARCH_DEBOUNCE_MS = 400;

const SearchBarVM: FC = () => {
  const { t } = useTranslation();
  const actions = useBoardActions();
  const [inputValue, setInputValue] = useState('');

  const debouncedSetSearchQuery = useDebounce<string>(
    SEARCH_DEBOUNCE_MS,
    actions.setSearchQuery,
  );

  const handleChange = useCallback(
    (value: string) => {
      setInputValue(value);
      debouncedSetSearchQuery(value);
    },
    [debouncedSetSearchQuery],
  );

  return (
    <div style={searchBarRootStyle}>
      <div style={searchBarInputWrapperStyle}>
        <Input
          value={inputValue}
          onChange={handleChange}
          placeholder={t('common:search')}
        />
      </div>
    </div>
  );
};

export default SearchBarVM;
