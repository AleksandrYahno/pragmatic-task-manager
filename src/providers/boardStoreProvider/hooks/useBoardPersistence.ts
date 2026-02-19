import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';

import { IBoardPersistence } from '@helpers/boardPersistence/boardPersistence.interface';

import { serializeBoardState } from '../boardStore/serializeBoardState.helper';
import useBoardStoreProvider from '../useBoardStoreProvider';

const DEBOUNCE_SAVE_MS = 300;

export const useBoardPersistence = (persistence: IBoardPersistence): void => {
  const { boardStore } = useBoardStoreProvider();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const loadTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;

    persistence.load()
      .then((data) => {
        if (!isMountedRef.current) return;
        loadTimeoutRef.current = setTimeout(() => {
          loadTimeoutRef.current = null;
          if (!isMountedRef.current) return;
          boardStore.getState().hydrateBoard(data);
        }, 0);
      })
      .catch((error) => {
        if (!isMountedRef.current) return;
        enqueueSnackbar(t('common:error_failed_to_load_board_state'), { variant: 'error' });
        console.error('Failed to load board state:', error);
      });

    return () => {
      isMountedRef.current = false;
      if (loadTimeoutRef.current !== null) {
        clearTimeout(loadTimeoutRef.current);
        loadTimeoutRef.current = null;
      }
    };
  }, [boardStore, persistence]);

  useEffect(() => {
    isMountedRef.current = true;

    const scheduleSave = (): void => {
      if (saveTimeoutRef.current !== null) {
        clearTimeout(saveTimeoutRef.current);
      }
      saveTimeoutRef.current = setTimeout(() => {
        saveTimeoutRef.current = null;
        if (!isMountedRef.current) return;
        const state = boardStore.getState();
        persistence.save(serializeBoardState(state))
          .catch((error) => {
            if (!isMountedRef.current) return;
            enqueueSnackbar(t('common:error_failed_to_save_board_state'), { variant: 'error' });
            console.error('Failed to save board state:', error);
          });
      }, DEBOUNCE_SAVE_MS);
    };

    const unsubscribe = boardStore.subscribe(scheduleSave);

    return () => {
      isMountedRef.current = false;
      unsubscribe();
      if (saveTimeoutRef.current !== null) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [boardStore, persistence]);
};
