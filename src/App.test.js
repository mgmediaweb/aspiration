import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import App from './App';

it("App Component mounted", async () => {
  render(
    <MockedProvider mocks={[]}>
      <App />
    </MockedProvider>
  );
  expect(await screen.findByText("Loading...")).toBeInTheDocument();
});
