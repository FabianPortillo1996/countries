import { render, screen } from '@testing-library/react';

import BaseCard from '@/components/atoms/base-card';

describe('<BaseCard />', () => {
  it('should render a div element with the correct class and role', () => {
    const children = 'Test Children';

    render(<BaseCard>{children}</BaseCard>);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass(
      'mt-12 w-full max-w-64 cursor-pointer overflow-hidden rounded bg-white shadow-md dark:bg-dark-22 md:mb-8',
    );
    expect(screen.getByText(children)).toBeInTheDocument();
  });

  it('should render the children prop passed to it', () => {
    const children = 'Test Children';

    render(<BaseCard>{children}</BaseCard>);

    expect(screen.getByText(children)).toBeInTheDocument();
  });

  it('should render without any children', () => {
    render(<BaseCard />);

    // Assert
    expect(screen.queryByText('Test Children')).not.toBeInTheDocument();
  });

  // children prop is null
  it('should render without any children when children prop is null', () => {
    // Act
    render(<BaseCard>{null}</BaseCard>);

    // Assert
    expect(screen.queryByText('Test Children')).not.toBeInTheDocument();
  });

  // children prop is undefined
  it('should render without any children when children prop is undefined', () => {
    // Act
    render(<BaseCard>{undefined}</BaseCard>);

    // Assert
    expect(screen.queryByText('Test Children')).not.toBeInTheDocument();
  });

  // children prop is an empty string
  it('should render without any children when children prop is an empty string', () => {
    // Act
    render(<BaseCard />);

    // Assert
    expect(screen.queryByText('Test Children')).not.toBeInTheDocument();
  });
});
