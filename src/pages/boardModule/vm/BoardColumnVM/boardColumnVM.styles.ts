import { CSSProperties } from 'react';

const COLUMN_CARD_WIDTH = 280;

export const columnWrapperStyle: CSSProperties = {
  boxSizing: 'border-box',
  flex: '0 1 280px',
  minWidth: 280,
};

export const getCardStyle = (isDragging: boolean): CSSProperties => ({
  width: COLUMN_CARD_WIDTH,
  maxWidth: COLUMN_CARD_WIDTH,
  backgroundColor: isDragging ? 'var(--app-background-tertiary, #f5f5f7)' : undefined,
  opacity: isDragging ? 0.92 : 1,
  boxShadow: isDragging ? 'var(--app-shadow-md, 0 4px 12px rgba(0,0,0,0.08))' : undefined,
});

export const headerStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 8,
};

export const titleStyle: CSSProperties = {
  fontWeight: 600,
  fontSize: 15,
  flex: 1,
  color: 'var(--app-text-neutral, #1d1d1f)',
  letterSpacing: '-0.01em',
};

export const deleteButtonStyle: CSSProperties = {
  padding: '6px 10px',
  fontSize: 13,
};

export const taskListStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  marginTop: 4,
};
