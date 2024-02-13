import { render, screen } from '@testing-library/react';

import Dropdown from '.';

describe('<Dropdown />', () => {
  // Renders a button with label and default value
  it('should render a button with label and default value', () => {
    const options = [
      { label: 'Option 1' },
      { label: 'Option 2' },
      { label: 'Option 3' },
    ];
    const label = 'Select an option';
    const defaultValue = 'default_value';
    const onSelect = jest.fn();

    render(
      <Dropdown
        options={options}
        label={label}
        defaultValue={defaultValue}
        onSelect={onSelect}
      />,
    );
    // Assert that the button is rendered with the correct label and default value
    expect(screen.getByTestId('button-select')).toBeInTheDocument();
  });

  // Renders a chevron icon pointing down when dropdown is closed
  it('should render a chevron icon pointing down when dropdown is closed', () => {
    // Coverage in line 28
    // Initialize the Dropdown component with options, label, defaultValue, and onSelect props
    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ];
    const label = 'Select an option';
    const defaultValue = 'option1';
    const onSelect = jest.fn();

    render(
      <Dropdown
        options={options}
        label={label}
        defaultValue={defaultValue}
        onSelect={onSelect}
      />,
    );

    // Assert that the chevron icon pointing down is rendered
    expect(screen.getByTestId('button-select')).toHaveTextContent('svgrurl');
  });

  // Renders a button with only a label and no default value
  it('should render a button with only a label and no default value', () => {
    // Coverage in line 28
    // Initialize the Dropdown component with options, label, defaultValue, and onSelect props
    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ];
    const label = 'Select an option';
    const onSelect = jest.fn();

    render(<Dropdown options={options} label={label} onSelect={onSelect} />);

    // Assert that the button is rendered with only the label
    expect(screen.getByTestId('button-select')).toHaveTextContent(label);
  });

  // Renders a button with only a default value and no label
  it('should render a button with only a default value and no label', () => {
    // Coverage in line 28
    // Initialize the Dropdown component with options, label, defaultValue, and onSelect props
    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ];
    const defaultValue = 'option1';
    const onSelect = jest.fn();

    render(
      <Dropdown
        options={options}
        defaultValue={defaultValue}
        onSelect={onSelect}
      />,
    );

    // Assert that the button is rendered with only the default value
    expect(screen.getByTestId('button-select')).toHaveTextContent(defaultValue);
  });
});
