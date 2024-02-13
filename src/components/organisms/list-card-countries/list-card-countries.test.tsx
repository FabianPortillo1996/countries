import { render, screen } from '@testing-library/react';

import ListCardCountries from '.';

describe('<ListCardCountries />', () => {
  // Returns a list of CardCountry components for each country in the 'countries' prop
  it('should return a list of CardCountry components when countries prop is not empty', () => {
    const countries = [
      { id: 1, name: 'Country 1' },
      { id: 2, name: 'Country 2' },
      { id: 3, name: 'Country 3' },
    ];
    render(<ListCardCountries countries={countries} />);
    const cardCountries = screen.getAllByTestId('base-card');
    expect(cardCountries.length).toBe(countries.length);
  });

  // Renders the CardCountry components with the correct props
  it('should render the CardCountry components with the correct props', () => {
    const countries = [
      { id: 1, name: 'Country 1' },
      { id: 2, name: 'Country 2' },
      { id: 3, name: 'Country 3' },
    ];
    render(<ListCardCountries countries={countries} />);
    const cardCountries = screen.getAllByTestId('base-card');
    cardCountries.forEach((cardCountry, index) => {
      expect(cardCountry).toHaveTextContent(countries[index].name);
    });
  });

  // 'countries' prop is null
  it('should not render any CardCountry components when countries prop is null', () => {
    render(<ListCardCountries countries={null} />);
    const cardCountries = screen.queryAllByTestId('base-card');
    expect(cardCountries.length).toBe(0);
  });

  // 'countries' prop is undefined
  it('should not render any CardCountry components when countries prop is undefined', () => {
    render(<ListCardCountries countries={undefined} />);
    const cardCountries = screen.queryAllByTestId('base-card');
    expect(cardCountries.length).toBe(0);
  });
});
