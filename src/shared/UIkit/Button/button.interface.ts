import { CSSProperties, ReactNode } from 'react';

export interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  style?: CSSProperties;
  ariaLabel?: string;
}
