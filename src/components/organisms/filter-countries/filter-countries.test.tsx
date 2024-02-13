import { render, screen } from '@testing-library/react';

import FilterCountries from '.';

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

describe('<FilterCountries />', () => {
  // Renders a TextInput component with a search icon and a placeholder text "Search for a country...".
  it('should render TextInput component with search icon and placeholder text', () => {
    // Arrange
    render(<FilterCountries />);

    // Act
    const inputElement = screen.getByPlaceholderText('Search for a country...');
    const iconElement = screen.getByText('svgrurl');

    // Assert
    expect(inputElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  // Sets the default value of TextInput component to an empty string if "name" parameter is not present in URL search params.
  it('should set default value of TextInput component to empty string when "name" parameter is not present in URL search params', () => {
    // Arrange
    render(<FilterCountries />);

    // Act
    const inputElement = screen.getByPlaceholderText(
      'Search for a country...',
    ) as HTMLInputElement;

    // Assert
    expect(inputElement.value).toBe('');
  });
});
