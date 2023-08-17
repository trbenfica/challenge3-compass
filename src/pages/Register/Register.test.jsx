
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Register from './Register';
import { BrowserRouter } from 'react-router-dom';

describe('Register', () => {
  jest.mock('axios');

  test('renderiza o formulário e seus elementos', () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );

    const form = screen.getByTestId('register-component');
    const fullNameInput = screen.getByTestId('fullname-element');
    const usernameInput = screen.getByTestId('username-element');
    const emailInput = screen.getByTestId('email-element');
    const passwordInput = screen.getByTestId('password-element');
    const passwordInput2 = screen.getByTestId('password2-element');
    const submitButton = screen.getByRole('button', { name: 'Register' });

    expect(form).toBeInTheDocument();
    expect(fullNameInput).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput2).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
