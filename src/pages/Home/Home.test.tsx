
import { render, screen, waitFor, act } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  test('renderiza o header', () => {
    render(<Home />);

    const header = screen.getByTestId('header');

    expect(header).toBeInTheDocument();
  });

  test('renderiza hero banner', () => {
    render(<Home />);

    const header = screen.getByTestId('header');
    const heroBanner = screen.getByTestId('hero-banner');

    expect(header).toBeInTheDocument();
    expect(heroBanner).toBeInTheDocument();
  });
});
