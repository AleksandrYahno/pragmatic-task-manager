import { CSSProperties } from 'react';

export const searchBarRootStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 12,
  padding: '14px clamp(12px, 4vw, 28px)',
  backgroundColor: 'var(--app-background-neutral, #fff)',
  borderBottom: '1px solid var(--app-border-neutral, rgba(0,0,0,0.08))',
};

export const searchBarInputWrapperStyle: CSSProperties = {
  flex: '1 1 200px',
  minWidth: 0,
  maxWidth: 320,
};
