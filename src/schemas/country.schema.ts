import { z } from 'zod';

export const countrySchema = z.object({
  id: z.coerce.number(),
  flagUrl: z.string().min(1),
  name: z.string().min(1),
  population: z.string().min(1),
  capitals: z.string().min(1),
  region: z.string().min(1),
});

export const countriesParamsSchema = z.object({
  search: z.string().nullable(),
  region: z.string().nullable(),
});
