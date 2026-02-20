import { CSSProperties } from 'react';

export const selectStyle: CSSProperties = {
  padding: '10px 14px',
  borderRadius: 'var(--app-radius-sm, 8px)',
  border: '1px solid var(--app-border-neutral, rgba(0,0,0,0.08))',
  fontSize: 14,
  minWidth: 160,
  backgroundColor: 'var(--app-background-neutral, #fff)',
  color: 'var(--app-text-neutral, #1d1d1f)',
  cursor: 'pointer',
  outline: 'none',
  transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
};
