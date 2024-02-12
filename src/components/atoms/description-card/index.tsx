import classNames from 'classnames';
import React from 'react';

import type { DescriptionCardProps } from '@/types/components/atoms/description-card.types';

const DescriptionCard: React.FC<DescriptionCardProps> = ({
  description,
  label,
  smLight,
}) => {
  return (
    <li
      className={classNames('mb-2', {
        'text-sm font-light': smLight,
      })}
    >
      <span className="mr-1 font-semibold">{label}</span>
      {description}
    </li>
  );
};

export default DescriptionCard;
