import classNames from 'classnames';
import React from 'react';
import { useToggle } from 'usehooks-ts';

import DropdownOption from '@/components/atoms/dropdown-option';
import ChevronDown from '@/components/atoms/icons/chevron-down-outline.svg';
import ChevronUp from '@/components/atoms/icons/chevron-up-outline.svg';
import type { DropdownProps } from '@/types/components/molecules/dropdown.types';

const Dropdown: React.FC<DropdownProps> = ({
  options,
  label,
  defaultValue,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useToggle(false);

  const handleOnSelect = (region: string) => {
    onSelect(region);
    setIsOpen();
  };

  return (
    <div className="group relative inline-block w-full md:w-fit" role="group">
      <button
        onClick={setIsOpen}
        type="button"
        data-testid="button-select"
        className="flex h-14 w-8/12 flex-row items-center justify-between rounded bg-white px-4 shadow-md focus:outline-none dark:bg-dark-22 md:w-48"
      >
        {defaultValue || label}
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      <ul
        className={classNames(
          'absolute z-30 mt-2  w-8/12 list-none rounded bg-white px-4 py-3 shadow-lg dark:bg-dark-22',
          {
            hidden: !isOpen,
            block: isOpen,
          },
        )}
        role="menu"
      >
        {options.map((value) => (
          <DropdownOption
            {...value}
            key={value.label}
            onClick={() => handleOnSelect(value.label)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
