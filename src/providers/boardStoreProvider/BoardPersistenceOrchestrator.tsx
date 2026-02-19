import { FC } from 'react';

import { localStorageBoardPersistence } from '@helpers/boardPersistence/localStorageBoardPersistence';

import { useBoardPersistence } from './hooks/useBoardPersistence';

const BoardPersistenceOrchestrator: FC = () => {
  useBoardPersistence(localStorageBoardPersistence);

  return null;
};

export default BoardPersistenceOrchestrator;
