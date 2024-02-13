import type { z } from 'zod';

import TagButton from '@/components/atoms/button/tag';
import DescriptionCard from '@/components/atoms/description-card';
import Flag from '@/components/atoms/flag';
import { FlagType } from '@/enums/components/atoms/flag.enum';
import type { countrySchema } from '@/schemas/country.schema';

const DetailCountry = ({
  country: {
    flagUrl,
    name,
    population,
    region,
    capitals,
    subRegion,
    currencies,
    languages,
    borderCountries,
    domain,
  },
}: {
  country: z.infer<typeof countrySchema>;
}) => {
  return (
    <div className="flex flex-col items-start md:items-center lg:flex-row lg:justify-between">
      <Flag type={FlagType.detail} url={flagUrl} name={name} />
      <div>
        <h2 className="mt-10 text-xl font-bold tracking-wide">Belgium</h2>
        <div className="flex flex-col md:flex-row md:justify-between">
          <ul className="mb-8 mt-6 tracking-wide">
            <DescriptionCard label="Native Name:" description={name} smLight />
            <DescriptionCard
              label="Population:"
              description={population}
              smLight
            />
            <DescriptionCard label="Region:" description={region} smLight />
            <DescriptionCard
              label="Sub Region:"
              description={subRegion}
              smLight
            />
            <DescriptionCard label="Capital:" description={capitals} smLight />
          </ul>
          <ul className="mb-8 mt-6 text-sm font-light tracking-wide">
            <DescriptionCard
              label="Top Level Domain:"
              description={domain}
              smLight
            />
            <DescriptionCard
              label="Currencies:"
              description={currencies}
              smLight
            />
            <DescriptionCard
              label="Languages:"
              description={languages}
              smLight
            />
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold">Border Countries:</h3>
          <div className="flex flex-row flex-wrap gap-2.5 pb-12 pt-4 md:w-[30rem]">
            {borderCountries.split(',').map((country) => (
              <TagButton label={country} key={country} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCountry;
