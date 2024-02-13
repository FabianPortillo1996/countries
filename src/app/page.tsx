import { Suspense } from 'react';

import Loader from '@/components/atoms/loader';
import FilterCountries from '@/components/organisms/filter-countries';
import ListCardCountries from '@/components/organisms/list-card-countries';
import { getCountries } from '@/services/countries.services';
import type { CountriesSearchParams } from '@/types/components/pages/countries.types';

export const revalidate = 60;

export default async function Countries({
  searchParams,
}: CountriesSearchParams) {
  const countries = await getCountries({ searchParams });

  return (
    <main className="px-6 pb-10 pt-6 md:px-16">
      <FilterCountries />
      <Suspense
        key={`${searchParams?.search}-${searchParams?.region}`}
        fallback={
          <div className="mt-14 flex items-center justify-center">
            <Loader />
          </div>
        }
      >
        <div className="flex w-full flex-wrap justify-between px-10 md:justify-evenly md:gap-2.5 md:px-0">
          <ListCardCountries countries={countries} />
        </div>
      </Suspense>
    </main>
  );
}
