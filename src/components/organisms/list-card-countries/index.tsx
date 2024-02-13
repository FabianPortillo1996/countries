import React from 'react';

import CardCountry from '@/components/molecules/card/country';
import type { CountriesPageProps } from '@/types/components/pages/countries.types';

const ListCardCountries: React.FC<CountriesPageProps> = ({
  countries = [],
}) => {
  return countries?.map((country) => (
    <CardCountry key={country.id} {...country} />
  ));
};

export default ListCardCountries;
