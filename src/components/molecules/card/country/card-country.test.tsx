import { render, screen } from '@testing-library/react';

import CardCountry from '.';

describe('<CardCountry />', () => {
  // Renders a BaseCard component.
  it('should render a BaseCard component', () => {
    // Coverage in line 28
    render(<CardCountry />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  // Renders a Link component with the correct href.
  it('should render a Link component with the correct href', () => {
    const id = '123';
    render(<CardCountry id={id} flagUrl="http://localhost.com" />);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/${id}`);
  });

  // Renders a Flag component with the correct props.
  it('should render a Flag component with the correct props', () => {
    // Coverage in line 28
    const flagUrl = 'https://example.com/flag.png';
    const name = 'Country';
    render(<CardCountry flagUrl={flagUrl} name={name} />);
    const flag = screen.getByRole('img');
    expect(flag).toBeInTheDocument();
    expect(flag).toHaveAttribute(
      'src',
      '/_next/image?url=https%3A%2F%2Fexample.com%2Fflag.png&w=3840&q=75',
    );
  });

  // id prop is undefined.
  it('should render with undefined id prop', () => {
    // Coverage in line 28
    render(<CardCountry flagUrl="http://localhost.com" />);
    const flag = screen.getByRole('img');
    expect(flag).toBeInTheDocument();
    expect(flag).not.toHaveAttribute('id');
  });

  // flagUrl prop is undefined.
  it('should render with undefined flagUrl prop', () => {
    // Coverage in line 28
    render(<CardCountry />);
    const flag = screen.queryByRole('img');
    expect(flag).not.toBeInTheDocument();
  });

  // name prop is undefined.
  it('should render with undefined name prop', () => {
    // Coverage in line 28
    render(<CardCountry flagUrl="http://localhost.com" />);
    const flag = screen.getByRole('img');
    expect(flag).toBeInTheDocument();
    expect(flag).not.toHaveAttribute('name');
  });
});
