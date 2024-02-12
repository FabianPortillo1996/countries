'use client';

import { useRouter } from 'next/navigation';

import ArrowBackIcon from '@/components/atoms/icons/arrow-back-outline.svg';

const BackButton = () => {
  const { back } = useRouter();
  return (
    <button
      onClick={back}
      type="button"
      className="flex h-7 w-24 flex-row items-center justify-evenly rounded bg-white text-sm font-light shadow-md dark:bg-dark-22 lg:h-12 lg:w-28"
    >
      <ArrowBackIcon />
      Back
    </button>
  );
};

export default BackButton;
