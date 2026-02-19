import { CSSProperties } from 'react';

export const getButtonStyle = (
  disabled: boolean,
  variant: 'primary' | 'secondary',
): CSSProperties => {
  const backgroundColor = disabled
    ? '#ccc'
    : (variant === 'primary' ? '#0a66c2' : '#fff');
  const color = variant === 'secondary' ? '#333' : '#fff';
  const border = variant === 'secondary' ? '1px solid #ccc' : 'none';

  return {
    padding: '8px 12px',
    borderRadius: 6,
    border,
    backgroundColor,
    color,
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontSize: 14,
  };
};
