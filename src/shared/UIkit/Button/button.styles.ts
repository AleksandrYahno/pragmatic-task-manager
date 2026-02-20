import { CSSProperties } from 'react';

export const getButtonStyle = (
  disabled: boolean,
  variant: 'primary' | 'secondary',
): CSSProperties => {
  if (disabled) {
    return {
      padding: '10px 18px',
      borderRadius: 'var(--app-radius-sm, 8px)',
      border: 'none',
      backgroundColor: 'var(--app-background-tertiary, #f5f5f7)',
      color: 'var(--app-text-secondary, #86868b)',
      cursor: 'not-allowed',
      fontSize: 14,
      fontWeight: 500,
      transition: 'opacity 0.15s ease',
    };
  }

  if (variant === 'primary') {
    return {
      padding: '10px 18px',
      borderRadius: 'var(--app-radius-sm, 8px)',
      border: 'none',
      backgroundColor: 'var(--app-primary, #0071e3)',
      color: '#fff',
      cursor: 'pointer',
      fontSize: 14,
      fontWeight: 500,
      boxShadow: 'var(--app-shadow-sm, 0 1px 3px rgba(0,0,0,0.04))',
      transition: 'background-color 0.15s ease, box-shadow 0.15s ease',
    };
  }

  return {
    padding: '10px 18px',
    borderRadius: 'var(--app-radius-sm, 8px)',
    border: '1px solid var(--app-border-neutral, rgba(0,0,0,0.08))',
    backgroundColor: 'var(--app-background-neutral, #fff)',
    color: 'var(--app-text-neutral, #1d1d1f)',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 500,
    transition: 'background-color 0.15s ease, border-color 0.15s ease',
  };
};
