import type { FlagType } from '@/enums/components/atoms/flag.enum';

export interface FlagProps {
  type: FlagType;
  url: string;
  name: string;
}
