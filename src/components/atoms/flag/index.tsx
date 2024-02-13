import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

import { FlagType } from '@/enums/components/atoms/flag.enum';
import type { FlagProps } from '@/types/components/atoms/flag.types';

const Flag: React.FC<FlagProps> = ({ type, url, name }) => {
  return (
    <figure
      className={classNames('relative w-full', {
        'h-52 md:w-3/4 lg:w-5/12 lg:h-80': type === FlagType.detail,
        'h-36': type === FlagType.card,
      })}
    >
      <Image src={url} alt={`${name}-flag-${type}`} fill priority />
    </figure>
  );
};

export default Flag;
