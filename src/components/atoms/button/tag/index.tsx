import React from 'react';

import type { TagButtonProps } from '@/types/components/atoms/tag-button.types';

const TagButton: React.FC<TagButtonProps> = ({ label }) => {
  return (
    <button
      type="button"
      className="h-8 w-32 rounded bg-white text-center shadow-md dark:bg-dark-22"
    >
      {label}
    </button>
  );
};

export default TagButton;
