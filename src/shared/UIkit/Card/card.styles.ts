import { CSSProperties } from 'react';

export const CARD_BASE: CSSProperties = {
  minWidth: 280,
  padding: 16,
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
};

export const getCardStyle = (
  variant: 'solid' | 'dashed',
  isFocused: boolean,
): CSSProperties => {
  const border = variant === 'dashed'
    ? '2px dashed #ccc'
    : '1px solid #e0e0e0';
  const backgroundColor = variant === 'dashed'
    ? (isFocused ? '#fafafa' : '#f5f5f5')
    : '#fff';

  return {
    ...CARD_BASE,
    border,
    backgroundColor,
    boxShadow: variant === 'solid' ? '0 1px 3px rgba(0,0,0,0.08)' : undefined,
  };
};
