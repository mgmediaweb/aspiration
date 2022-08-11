import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Item from './Item';

const data = {
  nameWithOwner: 'Nasa/Openmct',
  stargazerCount: 10500,
  url: 'https://github.com/nasa/openmct',
};

it('Item show the provided information', async () => {
  render(<Item data={data} />);
  expect(await screen.findByText('Nasa/Openmct')).toBeInTheDocument();
});
