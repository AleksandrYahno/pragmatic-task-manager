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
  const { trigger, items, disabled = false, ariaLabel } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const handleClose = useCallback((): void => {
    setIsOpen(false);
    setHoveredIndex(null);
    requestAnimationFrame(() => {
      triggerRef.current?.focus();
    });
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
    if (event.key === 'ArrowDown' && isOpen && items.length > 0) {
      event.preventDefault();
      const firstButton = menuRef.current?.querySelector<HTMLButtonElement>(
        '[role="menuitem"] button',
      );
      firstButton?.focus();
    }
  };

  const handleMenuKeyDown = (event: KeyboardEvent<HTMLUListElement>): void => {
    if (event.key === 'Escape') {
      event.preventDefault();
      handleClose();

      return;
    }
    const buttons = menuRef.current?.querySelectorAll<HTMLButtonElement>(
      '[role="menuitem"] button',
    );
    if (!buttons?.length) return;
    const currentIndex = Array.from(buttons).indexOf(
      event.target as HTMLButtonElement,
    );
    if (currentIndex === -1) return;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const next = buttons[currentIndex + 1];
      next?.focus();
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prev = buttons[currentIndex - 1];
      prev?.focus();
    }
    if (event.key === 'Home') {
      event.preventDefault();
      buttons[0]?.focus();
    }
    if (event.key === 'End') {
      event.preventDefault();
      buttons[buttons.length - 1]?.focus();
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

  useEffect(() => {
    if (isOpen && !disabled && items.length > 0) {
      const firstButton = menuRef.current?.querySelector<HTMLButtonElement>(
        '[role="menuitem"] button',
      );
      firstButton?.focus();
    }
  }, [isOpen, disabled, items.length]);

  return (
    <div
      ref={wrapperRef}
      style={dropdownMenuWrapperStyle}
    >
      <div
        ref={triggerRef}
        style={getTriggerWrapperStyle(disabled)}
        onClick={handleTriggerClick}
        onKeyDown={handleTriggerKeyDown}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label={ariaLabel}
      >
        {trigger}
      </div>

      {isOpen && !disabled && (
        <ul
          ref={menuRef}
          style={dropdownMenuPanelStyle}
          role="menu"
          onKeyDown={handleMenuKeyDown}
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
