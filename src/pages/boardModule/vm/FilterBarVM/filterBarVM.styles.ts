import { CSSProperties } from 'react';

export const filterBarRootStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  padding: '10px 24px',
  backgroundColor: '#fafafa',
  borderBottom: '1px solid #eee',
};

export const filterBarLabelStyle: CSSProperties = {
  fontSize: 14,
  fontWeight: 500,
  marginRight: 4,
};

export const filterBarButtonStyle = (
  active: boolean,
): CSSProperties => ({
  padding: '6px 12px',
  borderRadius: 6,
  border: `1px solid ${active ? '#1976d2' : '#ccc'}`,
  backgroundColor: active ? '#e3f2fd' : '#fff',
  color: active ? '#1976d2' : '#333',
  fontSize: 14,
  cursor: 'pointer',
});
