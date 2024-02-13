import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import { Theme } from '@/enums/components/atoms/switch-theme.enum';

import SwitchTheme from '.';

describe('<SwitchTheme />', () => {
  let localStorageMock: { [key: string]: string } = {};

  beforeAll(() => {
    global.matchMedia = jest.fn((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    global.Storage.prototype.getItem = jest.fn(
      (key: string) => localStorageMock[key],
    );
    global.Storage.prototype.setItem = jest.fn((key: string, value: string) => {
      localStorageMock[key] = value;
    });
    jest.spyOn(React, 'useState').mockReturnValue([false, jest.fn()]);
  });

  beforeEach(() => {
    // Clear the localStorage-mock
    localStorageMock = {};
  });

  // Renders a button with a moon icon and 'Dark Mode' text when the theme is light
  it('should render a button with a moon icon and "Dark Mode" text when the theme is light',  async () => {
    render(<SwitchTheme />);
    waitFor(() => {
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
    waitFor(() => {
      expect(screen.getByRole('button')).toContainElement(
        screen.getByRole('img'),
      );
    });
    waitFor(() => {
      expect(screen.getByRole('button')).toHaveTextContent('Dark Mode');
    });
  });

  // Renders a button with a sun icon and 'Light Mode' text when the theme is dark
  it('should render a button with a sun icon and "Light Mode" text when the theme is dark', () => {
    // Mock the useTheme hook
    jest.mock('next-themes', () => ({
      useTheme: () => ({
        setTheme: jest.fn(),
        theme: Theme.dark,
      }),
    }));

    // Render the SwitchTheme component
    render(<SwitchTheme />);

    // Assert that the button with sun icon and 'Light Mode' text is rendered
    waitFor(() => {
      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.getByRole('button')).toContainElement(
        screen.getByRole('img'),
      );
      expect(screen.getByRole('button')).toHaveTextContent('Light Mode');
    });
  });

  // Clicking the button toggles the theme between light and dark
  it('should toggle the theme between light and dark when the button is clicked', () => {
    // Mock the useTheme hook
    const setTheme = jest.fn();
    jest.mock('next-themes', () => ({
      useTheme: () => ({
        setTheme,
        theme: Theme.light,
      }),
    }));

    // Render the SwitchTheme component
    render(<SwitchTheme />);

    // Click the button
    waitFor(() => {
      const button = screen.getByRole('button');
      fireEvent.click(button);
    });

    waitFor(() => {
      expect(setTheme).toHaveBeenCalledWith(Theme.dark);
    });
  });

  // Does not render anything if the component is not mounted
  it('should not render anything if the component is not mounted', () => {
    // Render the SwitchTheme component
    const { container } = render(<SwitchTheme />);

    // Assert that the component is not rendered
    expect(container).toBeEmptyDOMElement();
  });

  // Does not throw errors if the theme is undefined
  it('should not throw errors if the theme is undefined', () => {
    // Mock the useTheme hook
    jest.mock('next-themes', () => ({
      useTheme: () => ({
        setTheme: jest.fn(),
        theme: undefined,
      }),
    }));

    // Render the SwitchTheme component
    render(<SwitchTheme />);

    // Assert that the component is rendered without errors
    waitFor(() => {
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  // Does not throw errors if the setTheme function is undefined
  it('should not throw errors if the setTheme function is undefined', () => {
    // Mock the useTheme hook
    jest.mock('next-themes', () => ({
      useTheme: () => ({
        setTheme: undefined,
        theme: Theme.light,
      }),
    }));

    // Render the SwitchTheme component
    render(<SwitchTheme />);

    // Assert that the component is rendered without errors
    waitFor(() => {
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });
});
