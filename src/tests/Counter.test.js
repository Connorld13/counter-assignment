import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from '../components/Counter';


beforeEach(() => {
  // Render the Counter component before each test
  render(<Counter />);
});

test('renders counter message', () => {
  // Check if the Counter component renders
  const headerElement = screen.getByText(/counter/i);
  expect(headerElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Check if the initial count is 0
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Click the increment button and check if the count increments
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);

  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Click the decrement button and check if the count decrements
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);

  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('-1');
});
