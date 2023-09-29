import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the page title', () => {
  render(<App />);
  const title = screen.getByText(/Worlds Longest Rivers/i);
  expect(title).toBeInTheDocument();
});
// { selector: 'button' }

test('Buttons on the page make service calls to update the page', () => {
  render(<App />);

  expect(screen.getByRole('button', {
    name: /Nile/i
  })).toBeInTheDocument()

  expect(screen.getByRole('button', {
    name: /Amazon/i
  })).toBeInTheDocument()

  expect(screen.getByRole('button', {
    name: /Yangtze/i
  })).toBeInTheDocument()

  expect(screen.getByRole('button', {
    name: /Mississippi/i
  })).toBeInTheDocument()
});