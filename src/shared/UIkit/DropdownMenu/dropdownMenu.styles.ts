import { CSSProperties } from 'react';

export const dropdownMenuWrapperStyle: CSSProperties = {
  position: 'relative',
  display: 'inline-block',
};

export const getTriggerWrapperStyle = (disabled: boolean): CSSProperties => ({
  display: 'inline-block',
  cursor: disabled ? 'not-allowed' : 'pointer',
});

export const dropdownMenuPanelStyle: CSSProperties = {
  position: 'absolute',
  top: '100%',
  right: 0,
  marginTop: 6,
  minWidth: 160,
  padding: 6,
  backgroundColor: 'var(--app-background-neutral, #fff)',
  border: '1px solid var(--app-border-neutral, rgba(0,0,0,0.08))',
  borderRadius: 'var(--app-radius-md, 10px)',
  boxShadow: 'var(--app-shadow-md, 0 4px 12px rgba(0,0,0,0.06))',
  zIndex: 1000,
  listStyle: 'none',
  margin: 0,
};

export const dropdownMenuItemStyle: CSSProperties = {
  display: 'block',
  width: '100%',
  padding: '10px 12px',
  border: 'none',
  borderRadius: 'var(--app-radius-sm, 8px)',
  backgroundColor: 'transparent',
  fontSize: 14,
  textAlign: 'left',
  cursor: 'pointer',
  color: 'var(--app-text-neutral, #1d1d1f)',
};

export const dropdownMenuItemHoverStyle: CSSProperties = {
  backgroundColor: 'var(--app-background-tertiary, #f5f5f7)',
};

export const getDropdownMenuItemStyle = (hovered: boolean): CSSProperties => ({
  ...dropdownMenuItemStyle,
  ...(hovered ? dropdownMenuItemHoverStyle : {}),
});
