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
  marginTop: 4,
  minWidth: 160,
  padding: 4,
  backgroundColor: '#fff',
  border: '1px solid #e0e0e0',
  borderRadius: 6,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  zIndex: 1000,
  listStyle: 'none',
  margin: 0,
};

export const dropdownMenuItemStyle: CSSProperties = {
  display: 'block',
  width: '100%',
  padding: '8px 12px',
  border: 'none',
  borderRadius: 4,
  backgroundColor: 'transparent',
  fontSize: 14,
  textAlign: 'left',
  cursor: 'pointer',
  color: '#333',
};

export const dropdownMenuItemHoverStyle: CSSProperties = {
  backgroundColor: '#f5f5f5',
};

export const getDropdownMenuItemStyle = (hovered: boolean): CSSProperties => ({
  ...dropdownMenuItemStyle,
  ...(hovered ? dropdownMenuItemHoverStyle : {}),
});
