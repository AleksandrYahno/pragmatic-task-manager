import { CSSProperties, ReactNode } from 'react';

export interface ICheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  indeterminate?: boolean;
  children?: ReactNode;
  style?: CSSProperties;
}
