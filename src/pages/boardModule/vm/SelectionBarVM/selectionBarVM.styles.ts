import { CSSProperties } from 'react';

export const selectionBarRootStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 12,
  padding: '14px clamp(12px, 4vw, 28px)',
  backgroundColor: 'var(--app-background-neutral-subtle, #fbfbfd)',
  borderBottom: '1px solid var(--app-border-neutral, rgba(0,0,0,0.08))',
};

export const selectionBarCountStyle: CSSProperties = {
  fontWeight: 600,
  fontSize: 14,
  marginRight: 4,
  color: 'var(--app-text-neutral, #1d1d1f)',
};
