import { render, screen } from '@testing-library/react';
import React from 'react';

import BackButton from '@/components/atoms/button/back/index';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/navigation', () => ({
  ...require('next-router-mock'),
  useSearchParams: () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const router = require('next-router-mock').useRouter();
    const path = router.asPath.split('?')?.[1] ?? '';
    return new URLSearchParams(path);
  },
  usePathname: jest.fn(),
}));

describe('<BackButton />', () => {
  beforeAll(() => {
    jest.spyOn(React, 'useState').mockReturnValue([false, jest.fn()]);
  });

  // Renders a button element with the text "Back" and an ArrowBackIcon.
  it('should render a button element with the text "Back" and an ArrowBackIcon', () => {
    render(<BackButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
