import { render, screen } from '@testing-library/react';
import App from './App';

test('Currency converter text to be displayed on screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/currency converter/i);
  expect(linkElement).toBeInTheDocument();
});
