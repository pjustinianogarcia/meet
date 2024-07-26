import { render, screen, fireEvent } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let setNumberOfEventsMock;

  beforeEach(() => {
    setNumberOfEventsMock = jest.fn();
    render(<NumberOfEvents setNumberOfEvents={setNumberOfEventsMock} setErrorAlert={() => { }} />);
  });

  test('renders NumberOfEvents component', () => {
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  test('default value of the input field is 32', () => {
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue(32);
  });

  test('changes value when user types in input', () => {
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: '10' } });
    expect(inputElement).toHaveValue(10);
  });

  test('calls setNumberOfEvents with the correct value when input changes', () => {
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: '10' } });
    expect(setNumberOfEventsMock).toHaveBeenCalledWith(10);
  });

  test('calls setNumberOfEvents with 0 when input is cleared', () => {
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: '' } });
    expect(setNumberOfEventsMock).toHaveBeenCalledWith(0);
  });
});
