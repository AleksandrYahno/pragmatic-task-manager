import { FC } from 'react';

import { IButtonProps } from './button.interface';
import { getButtonStyle } from './button.styles';

const Button: FC<IButtonProps> = (props) => {
  const {
    children,
    onClick,
    disabled = false,
    variant = 'primary',
    style = {},
  } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        ...getButtonStyle(disabled, variant),
        ...style,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
