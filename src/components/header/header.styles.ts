import { CSSProperties } from 'react';

export const headerRootStyle: CSSProperties = {
  padding: '20px clamp(12px, 4vw, 28px)',
  borderBottom: '1px solid var(--app-border-neutral, rgba(0,0,0,0.08))',
  backgroundColor: 'var(--app-background-neutral, #fff)',
};

export const headerTitleStyle: CSSProperties = {
  margin: 0,
  fontSize: 22,
  fontWeight: 600,
  letterSpacing: '-0.02em',
  color: 'var(--app-text-neutral, #1d1d1f)',
};
