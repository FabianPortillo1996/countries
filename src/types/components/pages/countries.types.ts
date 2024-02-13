import type { z } from 'zod';
import type { countrySchema } from '@/schemas/country.schema';

export interface CountriesSearchParams {
  searchParams?: {
    search?: string;
    region?: string;
  };
}

export interface CountriesPageProps {
  countries: z.infer<typeof countrySchema>[];
}
