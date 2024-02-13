import { render, screen } from '@testing-library/react';

import TagButton from '.';

describe('<TagButton />', () => {
  // Renders a button with the label passed as prop
  it('should render a button with the label passed as prop', () => {
    const label = 'Test Label';
    render(<TagButton label={label} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(label);
  });

  // Button has a type of "button"
  it('should have a type of "button"', () => {
    render(<TagButton />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });

  // Button has a class of "h-8 w-32 rounded bg-white text-center shadow-md dark:bg-dark-22"
  it('should have a class of "h-8 w-32 rounded bg-white text-center shadow-md dark:bg-dark-22"', () => {
    render(<TagButton />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'h-8 w-32 rounded bg-white text-center shadow-md dark:bg-dark-22',
    );
  });

  // label prop is undefined
  it('should render a button with an empty label when label prop is undefined', () => {
    render(<TagButton />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('');
  });

  // label prop is null
  it('should render a button with an empty label when label prop is null', () => {
    render(<TagButton label={null} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('');
  });

  // label prop is an empty string
  it('should render a button with an empty label when label prop is an empty string', () => {
    render(<TagButton label="" />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('');
  });
});
