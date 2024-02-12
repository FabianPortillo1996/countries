'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebounceCallback } from 'usehooks-ts';

import SearchIcon from '@/components/atoms/icons/search-outline.svg';
import Dropdown from '@/components/molecules/forms/dropdown';
import TextInput from '@/components/molecules/forms/text-input';
import { REGIONS } from '@/constants/regions.constants';

const FilterCountries = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebounceCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('name', term);
    } else {
      params.delete('name');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  const handleFilterByRegion = (region: string) => {
    const params = new URLSearchParams(searchParams);
    if (params.get('region') === region) {
      params.delete('region');
    } else {
      params.set('region', region);
      params.delete('name');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex w-full flex-col md:mt-6 md:flex-row md:items-center md:justify-between">
      <TextInput
        iconName={<SearchIcon />}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        placeholder="Search for a country..."
        defaultValue={searchParams.get('name') || ''}
      />
      <div className="mt-10 md:mt-0">
        <Dropdown
          label="Filter by Region"
          options={REGIONS}
          defaultValue={searchParams.get('region') || ''}
          onSelect={(param) => handleFilterByRegion(param)}
        />
      </div>
    </div>
  );
};

export default FilterCountries;
