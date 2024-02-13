import { Suspense } from 'react';

import BackButton from '@/components/atoms/button/back';
import Loader from '@/components/atoms/loader';
import DetailCountry from '@/components/organisms/detail-country';
import { getCountryById } from '@/services/countries.services';

export const revalidate = 60;

const CountryDetailPage = async ({ params }: { params: { code: string } }) => {
  const country = await getCountryById(params.code);

  return (
    <main className="flex flex-col px-7 pt-9 md:px-[15%] md:pt-14">
      <BackButton />
      <div className="mt-16 md:mt-8">
        <Suspense key={params.code} fallback={<Loader />}>
          <DetailCountry country={country} />
        </Suspense>
      </div>
    </main>
  );
};

export default CountryDetailPage;
