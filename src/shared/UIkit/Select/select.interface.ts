import { CSSProperties } from 'react';

export interface ISelectOption {
  value: string;
  label: string;
}

export interface ISelectProps {
  options: ISelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholderLabel?: string;
  disabled?: boolean;
  ariaLabel?: string;
  style?: CSSProperties;
}
