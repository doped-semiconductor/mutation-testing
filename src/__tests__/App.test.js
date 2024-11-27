import { render, screen } from '@testing-library/react';
import App from '../App';
import Home from '../components/Home/Home';

test('renders welcome message in Home component rendered App component', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Hi There!/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('renders welcome message in Home component', () => {
  render(<Home />);
  const welcomeElement = screen.getByText(/Hi There!/i);
  expect(welcomeElement).toBeInTheDocument();
});
