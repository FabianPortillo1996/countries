import type { DropdownOptionProps } from '@/types/components/atoms/dropdown-option.types';

export interface DropdownProps {
  options: DropdownOptionProps[];
  label: string;
  defaultValue?: string;
  onSelect: (option: string) => void;
}
