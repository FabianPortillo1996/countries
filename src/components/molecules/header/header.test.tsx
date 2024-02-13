import { render, screen } from '@testing-library/react';

import Header from '.';

describe('Header', () => {
  it('should render a header element with the correct class', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass(
      'sticky top-0 z-10 flex h-24 w-full flex-row items-center justify-between bg-white px-4 shadow-[0px_2px_4px_0px_#00000024] dark:bg-dark-22 md:h-16 md:px-16',
    );
  });

  it('should render an h1 element with the correct class and text content', () => {
    render(<Header />);
    const h1Element = screen.getByRole('heading', { level: 1 });
    expect(h1Element).toHaveClass('font-bold md:text-xl');
    expect(h1Element).toHaveTextContent('Where in the World ?');
  });

  it('should not render the SwitchTheme component', () => {
    render(<Header />);
    const switchThemeComponent = screen.queryByRole('switch');
    expect(switchThemeComponent).not.toBeInTheDocument();
  });

  it('should not render the h1 element', () => {
    render(<Header />);
    const h1Element = screen.queryByRole('heading', { level: 1 });
    expect(h1Element).toBeInTheDocument();
  });
});
