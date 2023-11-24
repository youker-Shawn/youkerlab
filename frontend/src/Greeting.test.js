import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders greeting message', () => {
  render(<Greeting />);
  const linkElement = screen.getByText(/Hello, user!/i);
  expect(linkElement).toBeInTheDocument();
});