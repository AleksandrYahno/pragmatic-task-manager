import { CSSProperties } from 'react';

export const checkboxWrapperStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  cursor: 'pointer',
};

export const checkboxInputStyle: CSSProperties = {
  width: 18,
  height: 18,
  margin: 0,
  cursor: 'inherit',
  accentColor: '#0a66c2',
};

export const getCheckboxWrapperStyle = (
  disabled: boolean,
): CSSProperties => ({
  ...checkboxWrapperStyle,
  cursor: disabled ? 'not-allowed' : 'pointer',
  opacity: disabled ? 0.6 : 1,
});
