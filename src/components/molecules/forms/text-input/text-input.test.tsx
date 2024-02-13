import { render, screen } from '@testing-library/react';

import type { TextInputProps } from '@/types/components/molecules/text-input.types';

import TextInput from '.';

describe('<TextInput />', () => {
  // Renders a div element with a specific class and styles.
  it('should render a div element with specific class and styles', () => {
    // Arrange
    const props: TextInputProps = {
      iconName: 'icon',
    };

    // Act
    render(<TextInput {...props} />);

    // Assert
    expect(screen.getByTestId('container-input')).toBeInTheDocument();
    expect(screen.getByTestId('container-input')).toHaveClass(
      'flex h-14 w-full flex-row items-center overflow-hidden rounded bg-white shadow-md dark:bg-dark-22 md:w-96',
    );
  });

  // Renders an input element with specific classes and styles.
  it('should render an input element with specific classes and styles', () => {
    // Arrange
    const props: TextInputProps = {
      iconName: 'icon',
    };

    // Act
    render(<TextInput {...props} />);

    const { firstChild } = screen.getByTestId('container-input');
    const containerIcon = firstChild;
    // Assert
    expect(screen.getByTestId('container-input')).toBeInTheDocument();
    expect(containerIcon).toHaveClass('ml-4');
  });

  // iconName prop is not passed.
  it('should not render the icon when iconName prop is not passed', () => {
    // Arrange
    const props: TextInputProps = {};

    // Act
    render(<TextInput {...props} />);

    // Assert
    expect(screen.queryByTestId('icon-element')).not.toBeInTheDocument();
  });

  // Rest props are not passed.
  it('should render the input element without any additional props', () => {
    // Arrange
    const props: TextInputProps = {};

    // Act
    render(<TextInput {...props} />);

    // Assert
    expect(screen.getByTestId('container-input')).toBeInTheDocument();
  });
});
