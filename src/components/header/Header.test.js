import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';

const newSearch = (elems, find) => console.log(elems, find);

const toSearch = 'nodejs';

it('Header find topic provided', async () => {
  render(<Header newSearch={newSearch} search={toSearch} />);
  expect(screen.getByDisplayValue(toSearch)).toHaveAttribute('value', toSearch);
});
