import { render, screen } from '@testing-library/react';

import DetailCountry from '.';

describe('<DetailCountry />', () => {
  it('should render the country flag, name, and details', () => {
    // Mock data
    const country = {
      flagUrl: 'https://example.com/flag.png',
      name: 'Belgium',
      population: 10000000,
      region: 'Europe',
      capitals: 'Brussels',
      subRegion: 'Western Europe',
      currencies: ['Euro'],
      languages: ['Dutch', 'French', 'German'],
      borderCountries: 'France, Germany, Netherlands',
      domain: '.be',
    };

    // Render DetailCountry component
    render(<DetailCountry country={country} />);

    const items = screen.getAllByRole('listitem');

    // Assert
    expect(screen.getByRole('figure')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    expect(items.length).toBe(8);
  });
});
