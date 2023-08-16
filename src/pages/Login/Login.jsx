
import styles from './FormItems.module.css';
import useInput from '../../hooks/use-input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ModalWindow from '../../components/ModalWindow/ModalWindow';

export default function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  // Para submissão dos dados
  const sendHttpRequest = async (body) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://parseapi.back4app.com/users',
        headers: {
          "X-Parse-Application-Id": "DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL",
          'X-Parse-Master-Key': '0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9',
          "X-Parse-Client-Key": 'zXOqJ2k44R6xQqqlpPuizAr3rs58RhHXfU7Aj20V',
          "X-Parse-Revocable-Session": 1
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

  function closeModal() {
    if(!isModalOpen)
      navigate('/');
    else
      setIsModalOpen(false);
  }

  function sumbitHandler (event) {
    event.preventDefault();
    if (formIsValid) {
      const newUserData = `{
        "username": "${username}",
        "password": "${password}"
      }`;
      sendHttpRequest(newUserData);
    }
  };

  const {
    value: username,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    valueChangeHandler: usernameHandler,
    inputBlurHandler: usernameBlur,
    reset: usernameReset
  } = useInput(value => value.trim().length > 5);

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordHandler,
    inputBlurHandler: passwordBlur,
    reset: passowrdReset,
  } = useInput((value) => value.length > 5);

  let formIsValid = false;
  if(usernameIsValid && passwordIsValid){
    formIsValid = true;
  }

  let showModal = ((status !== 200) && (status !== null)) || isModalOpen;

  return(
    <form className={styles.form} onSubmit={sumbitHandler}>
      {/* <h3 className={styles.formTitle}>Username</h3> */}
      {showModal && <ModalWindow isOpen={isModalOpen} onClose={closeModal}>
          <img src='https://cdn-icons-png.flaticon.com/128/2797/2797387.png' alt="" />
          <h1>Erro! Nome ou senhas incorretos</h1>
        </ModalWindow>
      }
      <button className={styles.formTest} onClick={() => setIsModalOpen(true)}><h2>Username</h2></button>
      <input className={styles.formInput}
        type="text"
        value={username} 
        onChange={usernameHandler}
        onBlur={usernameBlur}
        style={usernameHasError ? {borderColor: 'red'} : {}} />
      <h3 className={styles.formTitle}>Password</h3>
      <input className={styles.formInput}
        type="password" 
        value={password} 
        onChange={passwordHandler}
        onBlur={passwordBlur}
        style={passwordHasError ? {borderColor: 'red'} : {}} />
      {passwordHasError && <p className={styles.formError}>
          A senha deve conter mais de 5 caracteres
        </p>
      }
      {usernameHasError && <p className={styles.formError}>
          O nome de usuário deve conter mais de 5 caracteres
        </p>
      }
      <button className={styles.formButton} type='submit'>
        Login
      </button>
      <p className={styles.formRegister}>
        Don't have an account? <a href='/register/'>Register</a>
      </p>
    </form>
  );
}