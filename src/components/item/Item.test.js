import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Item from './Item';

const data = {
  stargazerCount: 10500,
  relatedTopics: [],
};

it('Item show the provided information', async () => {
  render(<Item topic="Javascript" data={data} />);
  expect(await screen.findByText('Javascript')).toBeInTheDocument();
});
