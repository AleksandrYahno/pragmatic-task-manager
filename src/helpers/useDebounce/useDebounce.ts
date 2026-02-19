import { useRef } from 'react';

const DEFAULT_DEBOUNCE_TIME_MS = 400;

export const useDebounce = <T>(
  delay: number = DEFAULT_DEBOUNCE_TIME_MS,
  callback?: (value: T) => void,
): (value?: T) => void => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debounceFn = (value?: T): void => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      if (callback != null && value !== undefined) {
        callback(value);
      }
    }, delay);
  };

  return debounceFn;
};
