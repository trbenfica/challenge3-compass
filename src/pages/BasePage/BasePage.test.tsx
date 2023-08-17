
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BasePage from './BasePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

describe('BasePage', () => {
  test('renderiza componente Register quando o prop é "register"', () => {
    render(
      <BrowserRouter>
        <BasePage content='register' />
      </BrowserRouter>
    );
    const registerComponent = screen.getByTestId('register-component');
    expect(registerComponent).toBeInTheDocument();
  });

  test('renderiza componente Login quando o prop é "login"', () => {
    render(
      <BrowserRouter>
        <BasePage content='login' />
      </BrowserRouter>
    );
    const loginComponent = screen.getByTestId('login-component');
    console.log(loginComponent);
    expect(loginComponent).toBeInTheDocument();
  });
});
