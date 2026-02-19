import { CSSProperties, KeyboardEvent } from 'react';

export interface IInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  style?: CSSProperties;
}
