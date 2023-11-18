
import styles from '../Login/FormItems.module.sass';
import useInput from '../../hooks/use-input';
import React, { useState } from 'react';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { mutationRegisterUser } from '../../services/queriesService';
import BASE_URI from '../../services/BASE_URI';
import headers from '../../services/config/Auth';

const Register: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [testModal, setTestModal] = useState<boolean>(false);
  const [status, setStatus] = useState<number | null>(null);
  const navigate = useNavigate();

  function closeModal() {
    setIsModalOpen(false);
    setTestModal(false);
    if(status === 200) {
      navigate('/login');
    }
  }

  function sumbitHandler (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formIsValid) {
      sendHttpRequest(username, password);
    }
  };

  // Para submissão dos dados
  const sendHttpRequest = async (username: string, password: string) => {
    try {
      const response = await axios({
        method: 'POST',
        url: BASE_URI,
        headers: headers,
        data: {
          query: mutationRegisterUser(username, password)
        }
      });
      setStatus(response.status);
      setIsModalOpen(true);
    } catch (error: any) {
      if (error.response) {
        setStatus(error.response.status);
      } else {
        setStatus(400);
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

  let modalContent: React.ReactNode;
  if(status !== null) {
    if(status === 200) {
      modalContent = 
        <>
          <img src='https://cdn-icons-png.flaticon.com/128/4315/4315445.png' alt="" />
          <h1>Sucesso! Você será redirecionado para a página de login</h1>
        </>;
    }
    else {
      modalContent = 
        <>
          <img src='https://cdn-icons-png.flaticon.com/128/2797/2797387.png' alt="" />
          <h1>Erro! Não foi possível processar sua solicitação</h1>
        </>;
    }
  }
  // console.log(status);
  if(testModal === true) {
    if(isModalOpen === false)
      setIsModalOpen(true);
  }

  return(
    <>
      {status !== null && <ModalWindow isOpen={isModalOpen} onClose={closeModal}>
          {modalContent}
        </ModalWindow>
      }
      {testModal && <ModalWindow isOpen={isModalOpen} onClose={closeModal}>
          <img src='https://cdn-icons-png.flaticon.com/128/2797/2797387.png' alt="" />
          <h1>Erro! Não foi possível processar sua solicitação</h1>
        </ModalWindow>
      }
      <form className={styles.form} onSubmit={sumbitHandler} data-testid='register-component'>
        <button className={styles.formTest} onClick={() => setTestModal(true)}>Please fill the form to Register!</button>
        <h3 className={styles.formTitle}>Full name</h3>
        <input className={styles.formInput}
          type="text"
          value={fullName} 
          onChange={fullNameHandler}
          onBlur={fullNameBlur}
          data-testid='fullname-element'
          style={fullNameHasError ? {borderColor: 'red'} : {}} />

        <h3 className={styles.formTitle}>Username</h3>
        <input className={styles.formInput}
          type="text"
          value={username} 
          onChange={usernameHandler}
          data-testid='username-element'
          onBlur={usernameBlur}
          style={usernameHasError ? {borderColor: 'red'} : {}} />

        <h3 className={styles.formTitle}>E-mail</h3>
        <input className={styles.formInput}
          type="text"
          value={email} 
          onChange={emailHandler}
          data-testid='email-element'
          onBlur={emailBlur}
          style={emailHasError ? {borderColor: 'red'} : {}} />

        <h3 className={styles.formTitle}>Password</h3>
        <input className={styles.formInput}
          type="password" 
          value={password}
          data-testid='password-element'
          onChange={passwordHandler}
          onBlur={passwordBlur}
          style={passwordHasError ? {borderColor: 'red'} : {}} />

        <h3 className={styles.formTitle}>Confirm Password</h3>
        <input className={styles.formInput}
          type="password" 
          value={password2}
          onChange={password2Handler}
          data-testid='password2-element'
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
          Register
        </button>
        <p className={styles.formRegister}>
          Already have an account? <a href='/challenge3-compass/login/'>Login</a>
        </p>
      </form>
    </>
  );
}

export default Register;
