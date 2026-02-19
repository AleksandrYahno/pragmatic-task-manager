import { createContext, FC, PropsWithChildren, useMemo, useRef } from 'react';
import { create, StoreApi, UseBoundStore } from 'zustand';

import { IBoardStoreContext } from './boardStoreContext.interface';
import { boardStoreInitializer } from './boardStore/boardStore';
import { IBoardStore } from './boardStore/boardStore.interface';

const BoardStoreContext = createContext<IBoardStoreContext | undefined>(undefined);

export type UseBoardStore = UseBoundStore<StoreApi<IBoardStore>>;

const BoardStoreProvider: FC<PropsWithChildren> = (props) => {
  const {
    children,
  } = props;
  const storeRef = useRef<UseBoardStore>(create(boardStoreInitializer) as UseBoardStore);

  const values = useMemo(() => ({
    boardStore: storeRef.current,
  }), []);

  return (
    <BoardStoreContext.Provider value={values}>
      {children}
    </BoardStoreContext.Provider>
  );
};

export {
  BoardStoreProvider,
  BoardStoreContext,
};
