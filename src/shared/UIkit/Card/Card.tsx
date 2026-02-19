import { forwardRef } from 'react';

import { ICardProps } from './card.interface';
import { getCardStyle } from './card.styles';

const Card = forwardRef<HTMLDivElement, ICardProps>(
  (props, ref) => {
    const {
      children,
      variant = 'solid',
      isFocused = false,
      style = {},
    } = props;

    return (
      <div
        ref={ref}
        style={{
          ...getCardStyle(variant, isFocused),
          ...style,
        }}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';

export default Card;
