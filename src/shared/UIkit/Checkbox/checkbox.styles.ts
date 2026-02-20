import { CSSProperties } from 'react';

export const checkboxWrapperStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  cursor: 'pointer',
};

export const checkboxInputStyle: CSSProperties = {
  width: 20,
  height: 20,
  margin: 0,
  cursor: 'inherit',
  accentColor: 'var(--app-primary, #0071e3)',
};

export const getCheckboxWrapperStyle = (
  disabled: boolean,
): CSSProperties => ({
  ...checkboxWrapperStyle,
  cursor: disabled ? 'not-allowed' : 'pointer',
  opacity: disabled ? 0.6 : 1,
});
