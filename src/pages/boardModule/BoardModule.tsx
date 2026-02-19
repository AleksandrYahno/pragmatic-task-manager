import { FC, ReactElement, useMemo } from 'react';

import BoardVM from '@pages/boardModule/vm/BoardVM/BoardVM';
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
        <BoardVM />
      </main>
    </BoardProviders>
  );
};

export default BoardModule;
