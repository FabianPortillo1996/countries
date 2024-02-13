import Link from 'next/link';
import React from 'react';

import BaseCard from '@/components/atoms/base-card';
import DescriptionCard from '@/components/atoms/description-card';
import Flag from '@/components/atoms/flag';
import { FlagType } from '@/enums/components/atoms/flag.enum';
import type { CardCountryProps } from '@/types/components/molecules/card-country.types';

const CardCountry: React.FC<CardCountryProps> = ({
  flagUrl,
  name,
  population,
  capitals,
  region,
  id,
}) => {
  return (
    <BaseCard>
      {flagUrl && (
        <Link href={`/${id}`}>
          <Flag type={FlagType.card} name={name} url={flagUrl} />
        </Link>
      )}
      <div className="px-5 pb-11 pt-7">
        <h1 className="mb-4 text-lg font-bold">{name}</h1>
        <ul className="text-sm font-light tracking-wide">
          <DescriptionCard label="Population:" description={population} />
          <DescriptionCard label="Region:" description={region} />
          <DescriptionCard label="Capital:" description={capitals} />
        </ul>
      </div>
    </BaseCard>
  );
};

export default CardCountry;
