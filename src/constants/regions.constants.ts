import { Regions } from '@/enums/regions.enum';
import type { DropdownOptionProps } from '@/types/components/atoms/dropdown-option.types';

export const REGIONS: Pick<DropdownOptionProps, 'label'>[] = [
  { label: Regions.Africa },
  { label: Regions.America },
  { label: Regions.Asia },
  { label: Regions.Europe },
  { label: Regions.Oceania },
];
