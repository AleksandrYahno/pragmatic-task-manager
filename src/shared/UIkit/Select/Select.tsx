import { ChangeEvent, FC } from 'react';

import { ISelectProps } from './select.interface';
import { selectStyle } from './select.styles';

const Select: FC<ISelectProps> = (props) => {
  const {
    options,
    value,
    onChange,
    placeholderLabel,
    disabled = false,
    ariaLabel,
    style = {},
  } = props;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    onChange(event.target.value);
  };

  return (
    <select
      value={value}
      onChange={handleChange}
      disabled={disabled}
      aria-label={ariaLabel}
      style={{
        ...selectStyle,
        ...style,
      }}
    >
      {placeholderLabel !== undefined && (
        <option
          value=""
          disabled
        >
          {placeholderLabel}
        </option>
      )}
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
