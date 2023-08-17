
import { render, screen, fireEvent } from '@testing-library/react';
import Restaurant from './Restaurant';


describe('Restaurant', () => {

  test('renderiza o formulário e seus elementos', () => {
    render(
        <Restaurant />
    );

    const header = screen.getByTestId('header');
    const searchBarRestaurant = screen.getByTestId('search-bar-restaurant');
    const cart = screen.getByTestId('cart');
    

    expect(header).toBeInTheDocument();
    expect(searchBarRestaurant).toBeInTheDocument();
    expect(cart).toBeInTheDocument();
  });


});
