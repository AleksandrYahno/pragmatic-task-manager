import { useContext } from 'react';

import { IBoardStoreContext } from './boardStoreContext.interface';
import { BoardStoreContext } from './BoardStoreProvider';

const useBoardStoreProvider = (): IBoardStoreContext => {
  const context = useContext(BoardStoreContext);

  if (!context) {
    throw new Error('useBoardStoreProvider must be used within a BoardStoreProvider');
  }

  return context;
};

export default useBoardStoreProvider;
