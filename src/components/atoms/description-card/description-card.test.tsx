import { render, screen } from '@testing-library/react';

import DescriptionCard from '.';

describe('DescriptionCard', () => {
  // Renders a li element with class 'mb-2' and a span element with class 'mr-1 font-semibold'
  it('should render li and span elements with correct classes', () => {
    // Arrange
    const description = 'Test description';
    const label = 'Test label';
    const smLight = false;

    // Act
    render(
      <DescriptionCard
        description={description}
        label={label}
        smLight={smLight}
      />,
    );
    const liElement = screen.getByText(description);

    // Assert
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText(label)).toHaveClass('mr-1');
    expect(screen.getByText(label)).toHaveClass('font-semibold');
    expect(liElement).toHaveClass('mb-2');
  });

  // Displays the label and description passed as props
  it('should display the label and description passed as props', () => {
    // Arrange
    const description = 'Test description';
    const label = 'Test label';
    const smLight = false;

    // Act
    render(
      <DescriptionCard
        description={description}
        label={label}
        smLight={smLight}
      />,
    );

    // Assert
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  // Applies the 'text-sm font-light' class to the li element if the 'smLight' prop is true
  it('should apply the "text-sm font-light" class to the li element if the "smLight" prop is true', () => {
    // Arrange
    const description = 'Test description';
    const label = 'Test label';
    const smLight = true;

    // Act
    render(
      <DescriptionCard
        description={description}
        label={label}
        smLight={smLight}
      />,
    );

    const { parentNode } = screen.getByText(label);

    // Assert
    expect(parentNode).toHaveClass('text-sm');
    expect(parentNode).toHaveClass('font-light');
  });

  // 'label' prop is not passed
  it('should not display the label if "label" prop is not passed', () => {
    // Arrange
    const description = 'Test description';
    const smLight = false;

    // Act
    render(<DescriptionCard description={description} smLight={smLight} />);

    // Assert
    expect(screen.queryByText('Test label')).not.toBeInTheDocument();
  });

  // 'description' prop is not passed
  it('should not display the description if "description" prop is not passed', () => {
    // Arrange
    const label = 'Test label';
    const smLight = false;

    // Act
    render(<DescriptionCard label={label} smLight={smLight} />);

    // Assert
    expect(screen.queryByText('Test description')).not.toBeInTheDocument();
  });

  // 'smLight' prop is not passed
  it('should not apply the "text-sm font-light" class to the li element if the "smLight" prop is not passed', () => {
    // Arrange
    const description = 'Test description';
    const label = 'Test label';

    // Act
    render(<DescriptionCard description={description} label={label} />);
    const { parentNode } = screen.getByText(label);
    // Assert
    expect(parentNode).not.toHaveClass('text-sm');
    expect(parentNode).not.toHaveClass('font-light');
  });
});
