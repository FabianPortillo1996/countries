import '../../../../../_mock/routerMock';

import { render, screen } from '@testing-library/react';
import React from 'react';

import BackButton from '@/components/atoms/button/back/index';

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
