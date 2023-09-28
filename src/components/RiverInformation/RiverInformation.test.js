import { render, screen } from '@testing-library/react';
import RiverInformation from './RiverInformation';

test('renders learn react link', () => {
  render(<RiverInformation />);
  const title = screen.getByText(/River Information/i);
  expect(title).toBeInTheDocument();
});
