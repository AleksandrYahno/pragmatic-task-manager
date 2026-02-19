import { CSSProperties } from 'react';

export const getCardStyle = (isDragging: boolean): CSSProperties => ({
  backgroundColor: isDragging ? '#e8f4fc' : undefined,
  opacity: isDragging ? 0.8 : 1,
});

export const headerStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 8,
};

export const titleStyle: CSSProperties = {
  fontWeight: 600,
  fontSize: 16,
  flex: 1,
};

export const deleteButtonStyle: CSSProperties = {
  padding: '4px 8px',
  fontSize: 12,
};

export const taskListStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  marginTop: 8,
};
