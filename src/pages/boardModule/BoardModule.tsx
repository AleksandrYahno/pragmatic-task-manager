import { FC, ReactElement, useMemo } from 'react';

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
        <h1>
          Board
        </h1>
      </main>
    </BoardProviders>
  );
};

export default BoardModule;
