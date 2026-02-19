import { CSSProperties } from 'react';

export const rootStyle: CSSProperties = {
  padding: 24,
  display: 'flex',
  flexDirection: 'row',
  gap: 16,
  alignItems: 'flex-start',
  minHeight: 400,
  overflowX: 'auto',
};

export const emptyMessageStyle: CSSProperties = {
  color: '#666',
  fontSize: 14,
  marginTop: 8,
};
