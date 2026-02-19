import { ComponentType, ReactNode } from 'react';

export interface IProviderProps {
  children: ReactNode;
  [key: string]: unknown;
}

export type IMultiProviderProps = [
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- third-party providers (e.g. SnackbarProvider) may have optional children
  ComponentType<any>,
  Record<string, unknown>?,
];

