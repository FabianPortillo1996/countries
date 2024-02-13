import { render, screen } from '@testing-library/react';

import { FlagType } from '@/enums/components/atoms/flag.enum';

import Flag from '.';

describe('<Flag />', () => {
  // Renders a flag image with the given url and alt text
  it('should render flag image with given url and alt text', () => {
    const url = '/images/testImage.webp';
    const altText = 'Flag Image';
    render(<Flag type={FlagType.detail} url={url} name={altText} />);
    const flagImage = screen.getByAltText(`${altText}-flag-${FlagType.detail}`);
    expect(flagImage).toBeInTheDocument();
    expect(flagImage).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fimages%2FtestImage.webp&w=3840&q=75',
    );
  });

  // Applies appropriate classNames based on the given type prop
  it('should apply appropriate classNames based on the given type prop', () => {
    const { container, rerender } = render(
      <Flag
        type={FlagType.detail}
        url="https://example.com/flag.png"
        name="Flag Image"
      />,
    );
    const { firstChild } = container;
    expect(firstChild).toHaveClass('h-52 md:w-3/4 lg:w-5/12 lg:h-80');
    rerender(
      <Flag
        type={FlagType.card}
        url="https://example.com/flag.png"
        name="Flag Image"
      />,
    );
    expect(firstChild).toHaveClass('h-36');
  });

  // Sets the height and width of the figure element based on the given type prop
  it('should set the height and width of the figure element based on the given type prop', () => {
    const { container, rerender } = render(
      <Flag
        type={FlagType.detail}
        url="https://example.com/flag.png"
        name="Flag Image"
      />,
    );
    const { firstChild } = container;

    expect(firstChild).toHaveClass('h-52');
    expect(firstChild).toHaveClass('w-full');
    rerender(
      <Flag
        type={FlagType.card}
        url="https://example.com/flag.png"
        name="Flag Image"
      />,
    );
    expect(firstChild).toHaveClass('h-36');
  });

  // name prop is undefined
  it('should render without error when name prop is undefined', () => {
    render(<Flag type={FlagType.detail} url="https://example.com/flag.png" />);
    expect(screen.getByAltText(/flag/i)).toBeInTheDocument();
  });

  // type prop is undefined
  it('should render without error when type prop is undefined', () => {
    render(<Flag url="https://example.com/flag.png" name="Flag Image" />);
    expect(screen.getByAltText(/flag/i)).toBeInTheDocument();
  });
});
