
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBarRestaurant from './SearchBarRestaurant';

describe('SearchBarRestaurant', () => {
  test('renderiza barra de busca', () => {
    render(<SearchBarRestaurant />);

    const searchInput = screen.getByPlaceholderText('Search for dish');
    expect(searchInput).toBeInTheDocument();
  });

  test('renderiza botão de favorito', () => {
    render(<SearchBarRestaurant />);

    const favoriteButton = screen.getByTestId('toggle-favorite');
    expect(favoriteButton).toBeInTheDocument();
  });

  test('atualiza botão de favorito', () => {
    render(<SearchBarRestaurant />);

    const favoriteButton = screen.getByTestId('toggle-favorite');

    fireEvent.click(favoriteButton);
    expect(screen.getByAltText('Disfavor')).toBeInTheDocument();

    fireEvent.click(favoriteButton);
    expect(screen.getByAltText('Favorite')).toBeInTheDocument();
  });
});
