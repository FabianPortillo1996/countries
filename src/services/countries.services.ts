import ky from 'ky';
import _get from 'lodash/get';

import { env } from '@/libs/env.mjs';
import { countrySchema } from '@/schemas/country.schema';
import type { CountriesResponse } from '@/types/api/countries.types';
import type { ResponseCustom } from '@/types/api/response.types';
import type { CountriesPageProps } from '@/types/components/pages/countries.types';
import { formatNumber } from '@/utils/number.utils';

export async function getCountries({ searchParams }: CountriesPageProps) {
  try {
    const countries = await ky(`${env.BFF_ENTRY_POINT}/api/countries`, {
      searchParams,
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    }).json<ResponseCustom<CountriesResponse>>();

    return countries.data.map(
      ({ region, name, flags, population, capital, idd }) => {
        return countrySchema.parse({
          id: _get(idd, 'root', 1),
          flagUrl: _get(flags, 'png', ''),
          name: _get(name, 'common', ''),
          population: formatNumber(population),
          capitals: capital?.join(', ') || ' ',
          region,
        });
      },
    );
  } catch (e) {
    return [];
  }
}
