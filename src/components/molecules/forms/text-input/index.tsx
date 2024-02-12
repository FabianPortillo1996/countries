'use client';

import classNames from 'classnames';
import React from 'react';

import type { TextInputProps } from '@/types/components/molecules/text-input.types';

const TextInput: React.FC<TextInputProps> = ({ iconName, ...rest }) => {
  return (
    <div className="flex h-14 w-full md:w-96 flex-row items-center overflow-hidden rounded bg-white shadow-md dark:bg-dark-22">
      {!!iconName && <div className="ml-4">{iconName}</div>}
      <input
        className={classNames(
          'size-full bg-transparent px-4 outline-none text-sm',
          {
            'ml-2': !!iconName,
          },
        )}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
