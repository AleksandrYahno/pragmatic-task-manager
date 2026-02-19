import { createContext, FC, PropsWithChildren } from 'react';
import { RouterProvider } from 'react-router';

import { IAppMainActions } from '@providers/appMainProvider/appMainActions.interface';
import { appRouter } from '@/appRoutes.config';

const AppMainContext = createContext(undefined);

export let appMainActions: IAppMainActions;

const AppMainProvider: FC<PropsWithChildren> = () => {
  return (
    <AppMainContext.Provider value={undefined}>
      <RouterProvider
        router={appRouter}
      />
    </AppMainContext.Provider>
  );
};

export {
  AppMainProvider,
  AppMainContext,
};
