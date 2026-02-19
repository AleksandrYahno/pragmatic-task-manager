import { FC, ReactElement, useMemo } from 'react';

import Header from '@components/header/Header';
import BoardVM from '@pages/boardModule/vm/BoardVM/BoardVM';
import SelectionBarVM from '@pages/boardModule/vm/SelectionBarVM/SelectionBarVM';
import { buildProvidersTree } from '@helpers/providerBuilder.helper';
import { BoardStoreProvider } from '@providers/boardStoreProvider/BoardStoreProvider';

const BoardModule: FC = (): ReactElement => {
  const BoardProviders = useMemo(() => {
    return buildProvidersTree([
      [BoardStoreProvider],
    ]);
  }, []);

  return (
    <BoardProviders>
      <main>
        <Header />

        <SelectionBarVM />

        <BoardVM />
      </main>
    </BoardProviders>
  );
};

export default BoardModule;
