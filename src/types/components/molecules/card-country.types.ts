import type { z } from 'zod';

import type { countrySchema } from '@/schemas/country.schema';

export interface CardCountryProps extends z.infer<typeof countrySchema> {}
