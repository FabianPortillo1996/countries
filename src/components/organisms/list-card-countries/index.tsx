import React from 'react';

import CardCountry from '@/components/molecules/card/country';
import { getCountries } from '@/services/countries.services';
import type { CountriesPageProps } from '@/types/components/pages/countries.types';

const ListCardCountries: React.FC<CountriesPageProps> = async ({
  searchParams,
}) => {
  const countries = await getCountries({ searchParams });

  return countries.map((country) => (
    <CardCountry key={country.id} {...country} />
  ));
};

export default ListCardCountries;
