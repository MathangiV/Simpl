import { render, screen } from '@testing-library/react';
import App from './App';
import NavBar from '../src/sections/NavBar';
import Button from '../src/components/Button';

//sample test cases

test('renders titles', () => {
  const { container } = render(<App />);
  expect(screen.getByText(/Welcome to/i)).toBeInTheDocument();
  expect(screen.getByText(/You can also use Simpl on/i)).toBeInTheDocument();
  expect(screen.getByText(/Recent transactions/i)).toBeInTheDocument();
  expect(screen.getByText(/Recharges & pay bills/i)).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

test('nav bar', () => {
  const { container } = render(<NavBar />);
  expect(document.querySelectorAll('nav a')).toHaveLength(5);
  expect(container).toMatchSnapshot();
});

test('buttons', () => {
  const { container } = render(<Button>ButtonText</Button>);
  expect(screen.getByText(/ButtonText/i)).toBeInTheDocument();
  expect(document.querySelector('button')).toHaveStyle(
    `background: inear-gradient(90deg, #00D1C1 0%, #00D1DC 100%)`
  );
  expect(container).toMatchSnapshot();
});
