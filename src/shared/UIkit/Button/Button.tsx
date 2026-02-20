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
    ariaLabel,
  } = props;

  const className = `ui-button ui-button--${variant}`;

  return (
    <button
      type="button"
      className={className}
      onClick={onClick ?? undefined}
      disabled={disabled}
      aria-label={ariaLabel}
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
