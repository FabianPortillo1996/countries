'use client';

import _capitalize from 'lodash/capitalize';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import MoonIcon from '@/components/atoms/icons/moon-outline.svg';
import SunnyIcon from '@/components/atoms/icons/sunny-outline.svg';
import { Theme } from '@/enums/components/atoms/switch-theme.enum';

const SwitchTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  const toTheme = theme === Theme.dark ? Theme.light : Theme.dark;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="flex flex-row items-center gap-2"
      type="button"
      onClick={() => setTheme(toTheme)}
    >
      {toTheme === Theme.dark ? <MoonIcon /> : <SunnyIcon />}{' '}
      {_capitalize(toTheme)} Mode
    </button>
  );
};

export default SwitchTheme;
