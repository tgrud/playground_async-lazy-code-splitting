import { render, screen } from '@testing-library/react';
import RiverInformation from './RiverInformation';

test('renders section title', () => {
  render(<RiverInformation />);
  const title = screen.getByText(/River Information/i);
  expect(title).toBeInTheDocument();
});

  // ${mockData.continent}
  // const mockData = {
  //   continent: 'Africa',
  //   length: '6,650 km',
  //   outflow: 'Mediterranean'
  // }

test('render initial mock data from fake service call', () => {

  render(<RiverInformation />);
  expect(screen.getByText(`Continent:`)).toBeInTheDocument()
  expect(screen.getByText(`Length:`)).toBeInTheDocument()
  expect(screen.getByText(`Outflow:`)).toBeInTheDocument()
});
