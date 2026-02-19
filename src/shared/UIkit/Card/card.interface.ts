import { CSSProperties, ReactNode } from 'react';

export interface ICardProps {
  children: ReactNode;
  variant?: 'solid' | 'dashed';
  isFocused?: boolean;
  style?: CSSProperties;
}
