import { CSSProperties } from 'react';

export const errorFallbackRootStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 240,
  padding: 32,
  backgroundColor: 'var(--app-background-neutral-subtle, #fbfbfd)',
  color: 'var(--app-text-neutral, #1d1d1f)',
  textAlign: 'center',
};

export const errorFallbackMessageStyle: CSSProperties = {
  marginBottom: 20,
  fontSize: 16,
  color: 'var(--app-text-secondary, #86868b)',
};

export const errorFallbackButtonStyle: CSSProperties = {
  padding: '10px 20px',
  borderRadius: 'var(--app-radius-sm, 8px)',
  border: '1px solid var(--app-border-neutral, rgba(0,0,0,0.08))',
  backgroundColor: 'var(--app-background-neutral, #fff)',
  color: 'var(--app-text-neutral, #1d1d1f)',
  fontSize: 14,
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'background-color 0.15s ease',
};
