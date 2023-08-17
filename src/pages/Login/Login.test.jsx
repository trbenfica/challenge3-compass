
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';

describe('Login', () => {
  jest.mock('axios');

  test('renderiza o formulário e seus elementos', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const form = screen.getByTestId('login-component');
    const usernameInput = screen.getByTestId('username-element');
    const passwordInput = screen.getByTestId('password-element');
    const submitButton = screen.getByRole('button', { name: 'Login' });

    expect(form).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
