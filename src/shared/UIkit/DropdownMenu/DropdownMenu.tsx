import { KeyboardEvent, MouseEvent } from 'react';
import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { IDropdownMenuProps } from './dropdownMenu.interface';
import {
  dropdownMenuPanelStyle,
  dropdownMenuWrapperStyle,
  getDropdownMenuItemStyle,
  getTriggerWrapperStyle,
} from './dropdownMenu.styles';

const DropdownMenu: FC<IDropdownMenuProps> = (props) => {
  const { trigger, items, disabled = false } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback((): void => {
    setIsOpen(false);
    setHoveredIndex(null);
  }, []);

  const handleTriggerClick = (): void => {
    if (disabled) return;
    setIsOpen((previous) => !previous);
  };

  const handleMenuItemClick = (event: MouseEvent<HTMLButtonElement>): void => {
    const indexString = event.currentTarget.dataset.index;

    if (indexString == null) return;

    const index = Number(indexString);
    const item = items[index];

    if (item != null) {
      item.onClick();
      handleClose();
    }
  };

  const handleMenuItemMouseEnter = (event: MouseEvent<HTMLButtonElement>): void => {
    const indexString = event.currentTarget.dataset.index;

    if (indexString == null) return;

    setHoveredIndex(Number(indexString));
  };

  const handleMenuItemMouseLeave = (): void => {
    setHoveredIndex(null);
  };

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleTriggerClick();
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleMouseDown = (event: globalThis.MouseEvent): void => {
      const target = event.target as Node;

      if (wrapperRef.current !== null && !wrapperRef.current.contains(target)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isOpen, handleClose]);

  return (
    <div
      ref={wrapperRef}
      style={dropdownMenuWrapperStyle}
    >
      <div
        style={getTriggerWrapperStyle(disabled)}
        onClick={handleTriggerClick}
        onKeyDown={handleTriggerKeyDown}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        {trigger}
      </div>

      {isOpen && !disabled && (
        <ul
          style={dropdownMenuPanelStyle}
          role="menu"
        >
          {items.map((item, index) => (
            <li
              key={item.id ?? index}
              role="menuitem"
            >
              <button
                type="button"
                data-index={index}
                style={getDropdownMenuItemStyle(hoveredIndex === index)}
                onClick={handleMenuItemClick}
                onMouseEnter={handleMenuItemMouseEnter}
                onMouseLeave={handleMenuItemMouseLeave}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
