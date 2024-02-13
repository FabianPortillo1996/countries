import ky from 'ky';
import _first from 'lodash/first';
import _get from 'lodash/get';
import _join from 'lodash/join';
import _keys from 'lodash/keys';

import { env } from '@/libs/env.mjs';
import { countrySchema } from '@/schemas/country.schema';
import type { CountriesResponse, Country } from '@/types/api/countries.types';
import type { ResponseCustom } from '@/types/api/response.types';
import type { CountriesSearchParams } from '@/types/components/pages/countries.types';
import { formatNumber } from '@/utils/number.utils';

const handleParseCountry = (country: Country) => {
  const {
    flags,
    name,
    population,
    capital,
    region,
    ccn3,
    tld,
    subregion,
    languages,
    currencies,
    borders,
  } = country;

  return countrySchema.parse({
    id: Number(ccn3),
    flagUrl: _get(flags, 'png', ''),
    name: _get(name, 'common', ''),
    population: formatNumber(population),
    capitals: capital?.join(', ') || ' ',
    region,
    domain: _first(tld) || ' ',
    languages:
      _keys(languages)
        .map((key) => languages[key])
        .join(', ') || ' ',
    subRegion: subregion || ' ',
    currencies:
      _keys(currencies)
        .map((key) => _get(currencies[key], 'name', ''))
        .join(', ') || ' ',
    borderCountries: _join(borders, ', ') || ' ',
  });
};

export async function getCountryById(code: string) {
  const { data: country } = await ky(`${env.BFF_ENTRY_POINT}/api/country`, {
    searchParams: { code },
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
  }).json<ResponseCustom<Country>>();
  return handleParseCountry(country);
}

export async function getCountries({ searchParams }: CountriesSearchParams) {
  try {
    const countries = await ky(`${env.BFF_ENTRY_POINT}/api/countries`, {
      searchParams,
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    }).json<ResponseCustom<CountriesResponse>>();

    return countries.data.map(handleParseCountry);
  } catch (e) {
    return [];
  }
}
