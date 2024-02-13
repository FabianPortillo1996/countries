import React from 'react';

import type { BaseCardProps } from '@/types/components/atoms/base-card.types';

const BaseCard: React.FC<BaseCardProps> = ({ children }) => {
  return (
    <div
      className="mt-12 w-full max-w-64 cursor-pointer overflow-hidden rounded bg-white shadow-md dark:bg-dark-22 md:mb-8"
      role="button"
      data-testid="base-card"
    >
      {children}
    </div>
  );
};

export default BaseCard;
