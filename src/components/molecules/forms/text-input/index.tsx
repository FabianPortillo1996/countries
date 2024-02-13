'use client';

import classNames from 'classnames';
import React from 'react';

import type { TextInputProps } from '@/types/components/molecules/text-input.types';

const TextInput: React.FC<TextInputProps> = ({ iconName, ...rest }) => {
  return (
    <div
      data-testid="container-input"
      className="flex h-14 w-full flex-row items-center overflow-hidden rounded bg-white shadow-md dark:bg-dark-22 md:w-96">
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
