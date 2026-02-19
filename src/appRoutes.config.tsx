import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

import LazyPageBoundary from '@components/lazyPageBoundary/LazyPageBoundary';

const BoardModule = lazy(() => import('./pages/boardModule/BoardModule'));

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <LazyPageBoundary>
        <BoardModule />
      </LazyPageBoundary>
    ),
  },
]);
