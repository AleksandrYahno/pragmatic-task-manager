import { CSSProperties } from 'react';

export const selectionBarRootStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  padding: '12px 24px',
  backgroundColor: '#e8f4fc',
  borderBottom: '1px solid #cce0f5',
};

export const selectionBarCountStyle: CSSProperties = {
  fontWeight: 600,
  fontSize: 14,
  marginRight: 8,
};

export const selectionBarSelectStyle: CSSProperties = {
  padding: '6px 10px',
  borderRadius: 6,
  border: '1px solid #ccc',
  fontSize: 14,
  minWidth: 160,
};
