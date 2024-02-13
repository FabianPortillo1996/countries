import { fireEvent, render, screen } from '@testing-library/react';

import DropdownOption from '.';

describe('DropdownOption', () => {
  // Renders a li element with class 'cursor-pointer px-4 py-3 text-sm'
  it('should render a li element with the correct class', () => {
    render(<DropdownOption label="Option 1" onClick={() => {}} />);
    const liElement = screen.getByRole('menuitem');
    expect(liElement).toHaveClass('cursor-pointer px-4 py-3 text-sm');
  });

  // Renders a button element with class 'w-full text-start'
  it('should render a button element with the correct class', () => {
    render(<DropdownOption label="Option 1" onClick={() => {}} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('w-full text-start');
  });

  // Passes the 'label' prop as the button's text content
  it("should pass the label prop as the button's text content", () => {
    render(<DropdownOption label="Option 1" onClick={() => {}} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent('Option 1');
  });

  // onClick prop is not provided
  it('should not throw an error when onClick prop is not provided', () => {
    expect(() => {
      render(<DropdownOption label="Option 1" />);
    }).not.toThrow();
  });

  // label prop is not provided
  it('should render an empty button when label prop is not provided', () => {
    render(<DropdownOption onClick={() => {}} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeEmptyDOMElement();
  });

  // onClick prop is not a function
  it('should not throw an error when onClick prop is not a function', () => {
    expect(() => {
      render(<DropdownOption label="Option 1" onClick="not a function" />);
    }).not.toThrow();
  });

  it("should pass the onClick prop as the button's onClick handler", () => {
    const onClickMock = jest.fn();
    render(<DropdownOption label="Option 1" onClick={onClickMock} />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});
