import { FC } from 'react';

import { useAppStore } from '@store/useAppStore';

import { IAppProps } from './App.interface';
import './App.css';

const App: FC<IAppProps> = () => {
  const { count, increment, reset } = useAppStore();

  return (
    <main className="app">
      <h1>
        Pragmatic Task Manager
      </h1>
      <p>
        React 19 + Vite 7 + TypeScript + Zustand
      </p>
      <div className="card">
        <span>
          count:
          {' '}
          {count}
        </span>
        <div className="actions">
          <button
            type="button"
            onClick={increment}
          >
            +1
          </button>
          <button
            type="button"
            onClick={reset}
          >
            reset
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
