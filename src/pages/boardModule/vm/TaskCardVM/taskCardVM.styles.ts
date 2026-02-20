import { CSSProperties } from 'react';

export const taskCardWrapperStyle: CSSProperties = {
  minWidth: 0,
};

export const taskTitleStyle: CSSProperties = {
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1.45,
  textDecoration: 'none',
  color: 'var(--app-text-neutral, #1d1d1f)',
  overflowWrap: 'break-word',
  wordBreak: 'break-word',
};

export const taskTitleCompletedStyle: CSSProperties = {
  ...taskTitleStyle,
  textDecoration: 'line-through',
  color: 'var(--app-text-secondary, #86868b)',
};

const taskCardTitleWrapStyle: CSSProperties = {
  flex: 1,
  minWidth: 0,
  overflowWrap: 'break-word',
  wordBreak: 'break-word',
};

export const getTaskTitleStyle = (completed: boolean): CSSProperties => ({
  ...(completed ? taskTitleCompletedStyle : taskTitleStyle),
  ...taskCardTitleWrapStyle,
});

export const taskCardRowStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: 10,
};

export const getTaskCardDragWrapperStyle = (isDragging: boolean): CSSProperties => ({
  opacity: isDragging ? 0.9 : 1,
  backgroundColor: isDragging ? 'var(--app-background-tertiary, #f5f5f7)' : undefined,
  borderRadius: 'var(--app-radius-sm, 8px)',
  padding: '2px 0',
});

export const taskTitleHighlightStyle: CSSProperties = {
  backgroundColor: 'rgba(0, 113, 227, 0.2)',
  borderRadius: 2,
  padding: '0 1px',
};
