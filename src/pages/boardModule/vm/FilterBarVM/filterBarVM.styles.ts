import { CSSProperties } from 'react';

export const filterBarRootStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 10,
  padding: '12px clamp(12px, 4vw, 28px)',
  backgroundColor: 'var(--app-background-neutral-subtle, #fbfbfd)',
  borderBottom: '1px solid var(--app-border-neutral, rgba(0,0,0,0.08))',
};

export const filterBarLabelStyle: CSSProperties = {
  fontSize: 14,
  fontWeight: 500,
  marginRight: 4,
  color: 'var(--app-text-secondary, #86868b)',
};

export const filterBarButtonStyle = (
  active: boolean,
): CSSProperties => ({
  padding: '8px 14px',
  borderRadius: 'var(--app-radius-sm, 8px)',
  border: active
    ? '1px solid var(--app-primary, #0071e3)'
    : '1px solid var(--app-border-neutral, rgba(0,0,0,0.08))',
  backgroundColor: active
    ? 'rgba(0, 113, 227, 0.08)'
    : 'var(--app-background-neutral, #fff)',
  color: active
    ? 'var(--app-primary, #0071e3)'
    : 'var(--app-text-neutral, #1d1d1f)',
  fontSize: 14,
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'background-color 0.15s ease, border-color 0.15s ease',
});
