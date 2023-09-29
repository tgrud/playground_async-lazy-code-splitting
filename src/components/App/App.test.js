import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the page title', () => {
  render(<App />);
  const title = screen.getByText(/Worlds Longest Rivers/i);
  expect(title).toBeInTheDocument();
});
