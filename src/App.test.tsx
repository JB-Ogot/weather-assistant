import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders assistant in the DOM', () => {
  render(<App />);
  const linkElement = screen.getByText(/Assistant/i);
  expect(linkElement).toBeInTheDocument();
});
