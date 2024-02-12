'use client';

import React from 'react';

import type { DropdownOptionProps } from '@/types/components/atoms/dropdown-option.types';

const DropdownOption: React.FC<DropdownOptionProps> = ({ label, onClick }) => {
  return (
    <li className="cursor-pointer px-4 py-3 text-sm" role="menuitem">
      <button className='w-full text-start' onClick={onClick} type="button">
        {label}
      </button>
    </li>
  );
};

export default DropdownOption;
