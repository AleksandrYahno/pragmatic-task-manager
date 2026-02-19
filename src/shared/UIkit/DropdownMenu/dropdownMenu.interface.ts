import { ReactNode } from 'react';

export interface IDropdownMenuItem {
  id?: string;
  label: string;
  onClick: () => void;
}

export interface IDropdownMenuProps {
  trigger: ReactNode;
  items: IDropdownMenuItem[];
  disabled?: boolean;
}
