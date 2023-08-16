
import styles from '../Login/FormItems.module.sass';
import useInput from '../../hooks/use-input';
import { useState } from 'react';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  function closeModal() {
    navigate('/login')
  }

  function sumbitHandler (event) {
    event.preventDefault();
    if (formIsValid) {
      const newUserData = `{
        "username": "${username}",
        "password": "${password}"
      }`;
      sendHttpRequest(newUserData);

      fullNameReset();
      passwordReset();
      usernameReset();
      emailReset();
      passwordReset();
      password2Reset();
    }
  };

  // Para submissão dos dados
  const sendHttpRequest = async (body) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://parseapi.back4app.com/users',
        headers: {
          "X-Parse-Application-Id": "lrAPveloMl57TTby5U0S4rFPBrANkAhLUll8jFOh",
          "X-Parse-REST-API-Key": '8aqUBWOjOplfA6lstntyYsYVkt3RzpVtb8qU5x08',
          "X-Parse-Revocable-Session": 1,
          "Content-Type": "application/json"
        },
        data: body
      });
      setStatus(response.status);
    } catch (error) {
      if (error.response) {
        setStatus(error.response.status);
      } else {
        setStatus('Error: Network Error');
      }
    }
  };

  const {
    value: fullName,
    isValid: fullNameIsValid,
    hasError: fullNameHasError,
    valueChangeHandler: fullNameHandler,
    inputBlurHandler: fullNameBlur,
    reset: fullNameReset
  } = useInput(value => value.trim().length > 0);

  const {
    value: username,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    valueChangeHandler: usernameHandler,
    inputBlurHandler: usernameBlur,
    reset: usernameReset
  } = useInput(value => value.trim().length > 0);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailHandler,
    inputBlurHandler: emailBlur,
    reset: emailReset,
  } = useInput((value) => value.includes('@'));

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordHandler,
    inputBlurHandler: passwordBlur,
    reset: passwordReset,
  } = useInput((value) => value.length > 5);

  const {
    value: password2,
    isValid: password2IsValid,
    hasError: password2HasError,
    valueChangeHandler: password2Handler,
    inputBlurHandler: password2Blur,
    reset: password2Reset,
  } = useInput((value) => value.length > 5);


  let formIsValid = false;
  if(fullNameIsValid && usernameIsValid && emailIsValid && passwordIsValid
    && password2IsValid){
      formIsValid = true;
  }

  return(
    <>
      {(status !== 201) && (status !== null) && <ModalWindow isOpen={isModalOpen} onClose={closeModal}>
          <img src='https://cdn-icons-png.flaticon.com/128/2797/2797387.png' alt="" />
          <h1>Erro! Não foi possível processar sua solicitação.</h1>
        </ModalWindow>
      }
      {(status === 201) && <ModalWindow isOpen={isModalOpen} onClose={closeModal}>
          <img src='https://cdn-icons-png.flaticon.com/128/4315/4315445.png' alt="" />
          <h1>Sucesso! Você será redirecionado para a página de login...</h1>
        </ModalWindow>
      }
      <form className={styles.form} onSubmit={sumbitHandler}>
        <p>Please fill the form to Register!</p>
        <h3 className={styles.formTitle}>Full name</h3>
        <input className={styles.formInput}
          type="text"
          value={fullName} 
          onChange={fullNameHandler}
          onBlur={fullNameBlur}
          style={fullNameHasError ? {borderColor: 'red'} : {}} />

        <h3 className={styles.formTitle}>Username</h3>
        <input className={styles.formInput}
          type="text"
          value={username} 
          onChange={usernameHandler}
          onBlur={usernameBlur}
          style={usernameHasError ? {borderColor: 'red'} : {}} />

        <h3 className={styles.formTitle}>E-mail</h3>
        <input className={styles.formInput}
          type="text"
          value={email} 
          onChange={emailHandler}
          onBlur={emailBlur}
          style={emailHasError ? {borderColor: 'red'} : {}} />

        <h3 className={styles.formTitle}>Password</h3>
        <input className={styles.formInput}
          type="password" 
          value={password} 
          onChange={passwordHandler}
          onBlur={passwordBlur}
          style={passwordHasError ? {borderColor: 'red'} : {}} />

        <h3 className={styles.formTitle}>Confirm Password</h3>
        <input className={styles.formInput}
          type="password" 
          value={password2} 
          onChange={password2Handler}
          onBlur={password2Blur}
          style={password2HasError ? {borderColor: 'red'} : {}} />

        {fullNameHasError && <p className={styles.formError}>
            Insira seu nome completo
          </p>
        }
        {usernameHasError && <p className={styles.formError}>
            O nome de usuário deve conter mais de 5 caracteres
          </p>
        }
        {emailHasError && <p className={styles.formError}>
            Insira um e-mail válido
          </p>
        }
        {passwordHasError && <p className={styles.formError}>
            A senha deve conter mais de 5 caracteres
          </p>
        }
        {password2HasError && <p className={styles.formError}>
            As senhas são diferentes
          </p>
        }
        
        <button className={styles.formButton} type='submit'>
          Login
        </button>
        <p className={styles.formRegister}>
          Already have an account? <a href='/login/'>Login</a>
        </p>
      </form>
    </>
  );
}