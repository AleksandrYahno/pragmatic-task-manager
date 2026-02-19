import { ChangeEvent, FC, useEffect, useRef } from 'react';

import { ICheckboxProps } from './checkbox.interface';
import {
  checkboxInputStyle,
  getCheckboxWrapperStyle,
} from './checkbox.styles';

const Checkbox: FC<ICheckboxProps> = (props) => {
  const {
    checked,
    onChange,
    disabled = false,
    indeterminate = false,
    children,
    style = {},
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      input.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.checked);
  };

  const wrapperStyle = {
    ...getCheckboxWrapperStyle(disabled),
    ...style,
  };

  return (
    <label style={wrapperStyle}>
      <input
        ref={inputRef}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        style={checkboxInputStyle}
      />

      {children}
    </label>
  );
};

export default Checkbox;
