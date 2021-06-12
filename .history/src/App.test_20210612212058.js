import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greeting', () => {
  render(<App />);
  const linkElement = screen.getByText(/Howdy, partner/i);
  expect(linkElement).toBeInTheDocument();
});
