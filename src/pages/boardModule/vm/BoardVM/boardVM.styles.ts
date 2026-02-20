import { CSSProperties } from 'react';

export const rootStyle: CSSProperties = {
  padding: 'clamp(12px, 4vw, 24px)',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 20,
  alignItems: 'flex-start',
  minHeight: 400,
};

export const addColumnWrapperStyle: CSSProperties = {
  flex: '0 1 280px',
  minWidth: 280,
};

export const emptyMessageStyle: CSSProperties = {
  color: 'var(--app-text-secondary, #86868b)',
  fontSize: 15,
  marginTop: 12,
  paddingLeft: 4,
};
