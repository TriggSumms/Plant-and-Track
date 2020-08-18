import React from 'react';
import { render } from '@testing-library/react';
import PlantBaby from './PlantBaby';

test('renders learn react link', () => {
  const { getByText } = render(<PlantBaby />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
