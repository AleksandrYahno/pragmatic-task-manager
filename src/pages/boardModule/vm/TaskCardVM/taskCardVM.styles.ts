import { CSSProperties } from 'react';

export const taskCardWrapperStyle: CSSProperties = {
  minWidth: 0,
};

export const taskTitleStyle: CSSProperties = {
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1.4,
  textDecoration: 'none',
};

export const taskTitleCompletedStyle: CSSProperties = {
  ...taskTitleStyle,
  textDecoration: 'line-through',
  color: '#888',
};

const taskCardTitleWrapStyle: CSSProperties = {
  flex: 1,
  minWidth: 0,
};

export const getTaskTitleStyle = (completed: boolean): CSSProperties => ({
  ...(completed ? taskTitleCompletedStyle : taskTitleStyle),
  ...taskCardTitleWrapStyle,
});

export const taskCardRowStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 8,
};

export const taskCardDeleteButtonStyle: CSSProperties = {
  padding: '4px 8px',
  fontSize: 12,
};
