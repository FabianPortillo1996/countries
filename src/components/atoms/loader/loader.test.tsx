import { render, screen } from '@testing-library/react';

import Loader from '.';

describe('<Loader />', () => {
  // Renders a loading spinner with the text "Loading..."
  it('should render a loading spinner with the text "Loading..."', () => {
    render(<Loader />);
    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveTextContent('Loading...');
  });

  // Spinner has a border, is rounded, and spins continuously
  it('should have a border, be rounded, and spin continuously', () => {
    render(<Loader />);
    const spinner = screen.getByRole('status');
    expect(spinner).toHaveClass('border-4');
    expect(spinner).toHaveClass('rounded-full');
    expect(spinner).toHaveClass('animate-spin');
  });

  // Spinner is centered and has appropriate size
  it('should be centered and have appropriate size', () => {
    render(<Loader />);
    const spinner = screen.getByRole('status');
    expect(spinner).toHaveClass('inline-block');
    expect(spinner).toHaveClass('align-[-0.125em]');
    expect(spinner).toHaveClass('size-8');
  });
});
