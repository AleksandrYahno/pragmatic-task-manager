import { CSSProperties } from 'react';

export const CARD_BASE: CSSProperties = {
  boxSizing: 'border-box',
  minWidth: 280,
  padding: 20,
  borderRadius: 'var(--app-radius-lg, 12px)',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  backgroundColor: 'var(--app-background-neutral, #fff)',
  border: '1px solid var(--app-border-neutral, rgba(0,0,0,0.08))',
  boxShadow: 'var(--app-shadow-sm, 0 1px 3px rgba(0,0,0,0.04))',
  transition: 'box-shadow 0.2s ease',
};

export const getCardStyle = (
  variant: 'solid' | 'dashed',
  isFocused: boolean,
): CSSProperties => {
  const border = variant === 'dashed'
    ? '2px dashed var(--app-border-neutral, rgba(0,0,0,0.08))'
    : '1px solid var(--app-border-neutral, rgba(0,0,0,0.08))';
  const backgroundColor = variant === 'dashed'
    ? (isFocused ? 'var(--app-background-neutral-subtle, #fbfbfd)' : 'var(--app-background-tertiary, #f5f5f7)')
    : 'var(--app-background-neutral, #fff)';

  return {
    ...CARD_BASE,
    border,
    backgroundColor,
    boxShadow: variant === 'solid' ? 'var(--app-shadow-md, 0 4px 12px rgba(0,0,0,0.06))' : undefined,
  };
};
