import { ChangeEvent, FC } from 'react';

import { IInputProps } from './input.interface';
import { inputStyle } from './input.styles';

const Input: FC<IInputProps> = (props) => {
  const {
    value,
    onChange,
    placeholder,
    onKeyDown,
    onFocus,
    onBlur,
    style = {},
    ariaLabel,
    maxLength,
  } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder={placeholder}
      aria-label={ariaLabel}
      maxLength={maxLength}
      style={{
        ...inputStyle,
        ...style,
      }}
    />
  );
};

export default Input;
